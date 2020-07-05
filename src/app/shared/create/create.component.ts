import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input('title') title: string;
  @Input('operation') operation: string;
  constructor() { }

  ngOnInit(): void {
  }

}
