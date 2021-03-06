import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Board, Member } from '../app.modelos';
import { URL } from '../contants';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  carregarQuadro(): Observable<Array<Board>>{
    return this.httpClient.get<Array<Board>>(`${URL}/boards`);
  }

  changeOnBoard(board: Board): Observable<any>{
    return this.httpClient.put<any>(`${URL}/boards/${board.id}`, board);
  }

  loadMembers():Observable<Array<Member>>{
    return this.httpClient.get<Array<Member>>(`${URL}/people`)
  }

  loadTag(): Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(`${URL}/tags`)
  }
}
