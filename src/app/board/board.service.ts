import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Board } from '../app.modelos';
import { URL } from '../contants';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) { }

  carregarQuadro(): Observable<Array<Board>>{
    return this.httpClient.get<Array<Board>>(`${URL}/boards`);
  }

  loadColumns(){}

  addColumn(){}

  removeColumn(){}

  loadCards(){}
  
  addCard(){}
 
  removeCard(){}
}
