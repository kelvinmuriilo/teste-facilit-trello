import { Component, OnInit } from '@angular/core';

import { Board, Column } from '../app.modelos';
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;
  columns: Column[];
  displayFilter: boolean;

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.loadBoard();
  }

  filterCard(){
    console.log('filtrar')
  }

  loadBoard(){
    this.boardService.carregarQuadro().subscribe(
      data => {
        this.board = data[0];
      },
      error => {
        alert('Erro ao carregar o quadro' + error);
      }
    );
  }

  loadColumns(){
  
  }

  addColumn(){}

  removeColumn(){}

  changeDisplayFilter(){
    this.displayFilter = !this.displayFilter;
  }

}
