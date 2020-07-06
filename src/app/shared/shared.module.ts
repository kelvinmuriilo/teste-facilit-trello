import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DragDropModule } from '@angular/cdk/drag-drop';


import { FilterButtonComponent } from './filter-button/filter-button.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { InputTextComponent } from './input-text/input-text.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { ModalMensagemComponent } from './modal/modal-mensagem/modal-mensagem.component';
import { SelectComponent } from './select/select.component';
import { InclusionModalComponent } from './modal/inclusion-modal/inclusion-modal.component';
import { CreateComponent } from './create/create.component';
import { ButtonComponent } from './button/button.component';



const COMPONENTES = [
  FilterButtonComponent,
  TextAreaComponent,
  InputTextComponent,
  UserIconComponent,
  CreateComponent,
  SelectComponent,
  ButtonComponent
];

@NgModule({
  declarations: [
    COMPONENTES,
  ],
  exports:[
    COMPONENTES
  ],
  entryComponents: [
    ModalMensagemComponent,
    InclusionModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule
  ]
})
export class SharedModule { }
