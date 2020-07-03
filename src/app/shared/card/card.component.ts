import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('tagList') tagList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.tagList)
  }

}
