import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


import { Board, Column, Member } from '../app.modelos';
import { AppService } from '../services/app.service';

import * as lodash from 'lodash';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;
  columns: Column[];
  displayFilter: boolean;
  membersOfCard: Member[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.loadBoard();
  }

  filterCard(){
  }

  loadBoard(){
    this.appService.carregarQuadro().subscribe(
      data => {
        this.board = data[0];
        this.returnTheMembersOfCard();
        this.returnTagsOfCards();   

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
  

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
    this.registerChanges();
  }

  registerChanges(){
    this.appService.changeOnBoard(this.board).subscribe(
      data => {
      },
      error => {
        alert('Não foi possível processar a requisição' + error);
      }
    );
  }

  returnTheMembersOfCard(){
    let columnsWithCards = this.board.columns.filter(column => {
      return column.cards.length > 0;
    });

    columnsWithCards.forEach(column => {
      column.cards.forEach(card => {
        if(card.members != undefined && card.members.length > 0){
          card.members.forEach(member => {
            this.membersOfCard.push(member);
          });
        }
      });
    });

    return lodash.uniqWith(this.membersOfCard, lodash.isEqual);
    
  }

  returnTagsOfCards(){
    let tags = [];
    let columnsWithCards = this.board.columns.filter(column => {
      return column.cards.length > 0;
    });

    columnsWithCards.forEach(column => {
      column.cards.forEach(card => {
        card.tags.forEach(tag => {
          if( card.tags != undefined && card.tags.length > 0){
            if(!lodash.includes(tags, tag )){
              tags.push(tag);
            }
          }
        })
        
      })
    });

    return tags;
  }
}
