import { Component, OnInit, TemplateRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


import { Board, Column, Member, Card } from '../app.modelos';
import { AppService } from '../services/app.service';

import * as lodash from 'lodash';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: Board;
  card: Card;
  column: Column;
  columns: Column[];
  displayFilter: boolean;
  membersOfCard: Member[] = [];
  modalRef: BsModalRef;
  members: Member[];
  tags: string [] = []
  displayColumnAction: boolean;
  operation: string;
  cardsTemp: any[] = [];
  tagsTemp: any[] = [];

  constructor(
    private appService: AppService,
    private bsModalService: BsModalService,
    ) { }

  ngOnInit(): void {
    this.loadBoard();
    this.loadMembers();
    
    this.card = new Card();
    this.column = new Column();
    this.loadTags();
  }

  filterCard(){
  }

  loadBoard(){
    this.appService.carregarQuadro().subscribe(
      data => {
        this.board = data[0];
      },
      error => {
        alert('Erro ao carregar o quadro' + error);
      }
    );
  }

  loadMembers(){
    this.appService.loadMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        alert('Erro ao carregar o membros' + error);
      }
    );
  }

  loadTags(){
    this.appService.loadTag().subscribe(
      data => {
        this.tags = data;
      },
      error =>{
        alert('Erro ao carregar as tags: ' + error);
      }
    );
  }

  loadColumns(){
  
  }

  openModalColumn(template: TemplateRef<any>, column?:Column): void {
    if(column !== undefined){
      this.operation = 'update';
      this.column = column;
      this.changeDisplayColumnAction(column);
      this.modalRef = this.bsModalService.show(template);
    } else {
      this.operation = 'add';
      this.column = new Column();
      this.modalRef = this.bsModalService.show(template);
    }
  }

  openModalCard(template: TemplateRef<any>, card?:Card){
    if(card !== undefined){
      this.operation = 'update';
      this.card = card;
      this.modalRef = this.bsModalService.show(template);
      this.resetTempArrays();
    } else {
      this.operation = 'add';
      this.card = new Card();
      this.modalRef = this.bsModalService.show(template);
      this.resetTempArrays();
    }
  }

  addCard(){
    this.cardsTemp.forEach((cardTemp, index)=>{
      if(cardTemp == true){
        this.card.members.push(this.members[index]);
      }
    });

    this.tagsTemp.forEach((tagTemp, index) => {
      if(tagTemp == true){
        this.card.tags.push(this.tags[index]);
      }
    }); 

    this.board.columns[0].cards.push(this.card);
    this.registerChanges();
    this.modalRef.hide();
    this.card = new Card();
    this.resetTempArrays();
  }

  updateCard(){
    this.registerChanges();
    this.closeModal();
  }

  removeCard(indexColumn: number, card: Card){
    this.board.columns[indexColumn].cards = this.board.columns[indexColumn].cards.filter(c => {
      return c != card
    });

    this.registerChanges();
    this.loadBoard();
  }

  addColumn(){
    this.board.columns.push(this.column);
    this.registerChanges();
    this.closeModal();
    this.column = new Column;
  }

  updateColumn(){
    this.registerChanges();
    this.closeModal();
  }

  removeColumn(column: Column){
    this.board.columns = this.board.columns.filter(element => {
      return element !== column;
    });
    this.registerChanges();
  }

  closeModal(){
    this.modalRef.hide();
  }

  changeDisplayFilter(){
    this.displayFilter = !this.displayFilter;
  }
  

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
    this.registerChanges();
  }

  dropCard(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.registerChanges();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.registerChanges();
    }
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

  changeDisplayColumnAction(column: Column){
    column.displayAction = ! column.displayAction;
  }

  private resetTempArrays(){
    this.cardsTemp = [];
    this.tagsTemp = [];
  }
}
