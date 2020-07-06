import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('classHabilitado') classHabilitado: string;
  @Input('classDesabilitado') classDesabilitado: string = 'btn-secondary'
  @Input('name') name: string;
  @Input('liberado') liberado: boolean = true;
  @Input('classIcon') classIcon: string;

  @Output() enventoClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  bindClick(){
    this.enventoClick.emit();
  }

  isBloqueado(): boolean{
    return this.liberado === false;
  }

  alterarEstilo(): string{
    if(this.liberado){
      return this.classHabilitado;
    }
   return this.classDesabilitado;
  }
}
