import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input('title') title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
