import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DragDropModule } from '@angular/cdk/drag-drop';


import { FilterButtonComponent } from './filter-button/filter-button.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ColumnComponent } from "./column/column.component";
import { CardComponent } from './card/card.component';
import { InputTextComponent } from './input-text/input-text.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { ModalMensagemComponent } from './modal/modal-mensagem/modal-mensagem.component';
import { ModalConfirmacaoComponent } from './modal/modal-confirmacao/modal-confirmacao.component';
import { SelectComponent } from './select/select.component';
import { InclusionModalComponent } from './modal/inclusion-modal/inclusion-modal.component';
import { CreateComponent } from './create/create.component';



const COMPONENTES = [
  FilterButtonComponent,
  TextAreaComponent,
  ColumnComponent,
  CardComponent,
  InputTextComponent,
  UserIconComponent,
  CreateComponent,
  SelectComponent
];

@NgModule({
  declarations: [
    COMPONENTES
  ],
  exports:[
    COMPONENTES
  ],
  entryComponents: [
    ModalMensagemComponent,
    ModalConfirmacaoComponent,
    InclusionModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule
  ]
})
export class SharedModule { }
