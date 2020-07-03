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
 * <app-input-text
    nome="Nome"
    tipo="text"
    mascara="(00) 0 0000-0000"
    prefixo="R$"    
    [valorInicial]="cliente.nome"
    (valorRetorno)="cliente.nome=$event"
  >
  </sales-input-text>

 * 
 * @Input nome - O titulo dado ao label do input. Uso opcional, por padrão é ''.
 * @Input tipo - O tipo do input. Por padrão é o text, mas pode ser number, date e demais suportados pelo HTML.
 * @Input placeholder - Placeholder do input. Uso opcional, por padrão é ''.
 * @Input valorInicial- É o valor inicial do input. Uso obrigatório.
 * @Input mascara - Máscara para o input.
 * @Input prefixo - Prefixo para antecder o valor na exibição do input
 *    Caso o atributo passado já possua valor, o mesmo será inserido no value do input.
 *    O tipo é any pois podem ser passados valores de qualquer tipo, permitindo a sua utilização em qualquer cenário.
 * @Output valorRetorno - Evento que emite o valor do campo toda vez que o mesmo é alterado. Uso obrigatório.
 */

export class InputTextComponent implements OnInit {

  @Input('nome') nome: string = '';
  @Input('tipo') tipo: string = 'text';
  @Input('placeholder') placeholder: string = '';
  @Input('valorInicial') valorInicial: any;

  @Output('valorRetorno') valorRetorno: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  retornarValor(){
    this.valorRetorno.emit(this.valorInicial);
  }

}



