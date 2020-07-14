import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})

/**
 * Componente de input de texto feito para ser utilizado com
 * template driven forms.
 * 
 * Exemplo de como utilizar:
 * <input-text
    nome="Nome"
    tipo="text"
    mascara="(00) 0 0000-0000"
    prefixo="R$"    
    [valorInicial]="cliente.nome"
    (valorRetorno)="cliente.nome=$event"
  >
  </input-text>
  */

export class InputTextComponent implements OnInit {

  @Input('nome') nome: string = '';
  @Input('tipo') tipo: string = 'text';
  @Input('placeholder') placeholder: string = '';
  @Input('valorInicial') valorInicial: any;

  @Output('valorRetorno') valorRetorno: EventEmitter<any> = new EventEmitter();
  @Output('pressEnter') pressEnter: EventEmitter<any> = new EventEmitter();
  @Output('focus') focus: EventEmitter<boolean> = new EventEmitter();
  @Output('reloadCards') reloadCards: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  retornarValor(){
    if(this.valorInicial == ''){
      this.bindReloadCards();
    }
    this.valorRetorno.emit(this.valorInicial);
  }

  focusOn(event){
    this.focus.emit();
    console.log(this.focus.emit())
  }

  bindPressEnter(event: KeyboardEvent): void{
    if(event.keyCode === 13){
      this.pressEnter.emit();
    }
  }

  private bindReloadCards(){
    this.reloadCards.emit();
  }

}



