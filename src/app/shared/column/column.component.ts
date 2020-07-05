import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card, Column } from 'src/app/app.modelos';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AppService } from 'src/app/services/app.service';
import { ModalServicoService } from '../modal/modal-servico.service';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('cards') cards: Card[];
  @Input('columns') columns: Column[];
  @Output('changeCards') changeCards: EventEmitter<any> = new EventEmitter;

  displayActionArea: boolean;
  

  constructor(private appService: AppService, private modalService: ModalServicoService, private bsModal: BsModalRef) { }

  ngOnInit(): void {
  }

  changeDisplayActionArea(){
    this.displayActionArea = !this.displayActionArea;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.changeCards.emit();
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      this.changeCards.emit();
    }
  }

  remove(){
    alert('removido')
  }

  dont(){
    this.bsModal.hide()
  }

  removeColumn(){
    this.modalService.exibirConfirmacao("Deseja excluir?", alert('removido') , this.dont() );
  }

}
