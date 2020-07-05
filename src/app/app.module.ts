import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

//Componentes
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';

// Modulos
import { SharedModule } from './shared/shared.module';

//Terceiros
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    DragDropModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
