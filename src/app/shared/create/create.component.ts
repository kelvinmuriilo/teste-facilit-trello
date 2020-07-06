import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input('title') title: string;
  @Input('operation') operation: string;

  @Output('clickEvent') clickEvent: EventEmitter<any> = new EventEmitter() ;
  constructor() { }

  ngOnInit(): void {
  }

  bindClick(){
    this.clickEvent.emit();
  }

}
