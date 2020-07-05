import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

/* 
*  Componente de select para template driven forms.
*  <select
*    nome="Membros"
*    [model]="card.member"
*    [listaValores]="listaProdutos"
*    (valorSelecionado)="itemVenda.produto=$event"
*  >
*  </select>  
*   
* @Input nome - Nome para label do select.
* @Input mode - Representa o do input select. 
* @Input listaValores - Lista dos elementos que serão as opções do select.
* @Output valorSelecionado - Evento que emite o valor da opção selecionada.
*/
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
