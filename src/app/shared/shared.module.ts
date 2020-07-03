import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { FilterButtonComponent } from './filter-button/filter-button.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ColumnComponent } from "./column/column.component";
import { CardComponent } from './card/card.component';
import { InputTextComponent } from './input-text/input-text.component';

const COMPONENTES = [
  FilterButtonComponent,
  TextAreaComponent,
  ColumnComponent,
  CardComponent,
  InputTextComponent
];

@NgModule({
  declarations: [
    COMPONENTES,
  ],
  exports:[
    COMPONENTES
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
