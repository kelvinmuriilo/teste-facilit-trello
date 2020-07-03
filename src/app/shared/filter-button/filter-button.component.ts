import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {
  @Input('buttonName') buttonName: string;

  @Output('clickButton') clickButton: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  bindClick(){
    this.clickButton.emit();
  }

}
