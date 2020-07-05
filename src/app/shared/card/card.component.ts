import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/app.modelos';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('title') title: string = '';
  @Input('tagList') tagList: string[];
  @Input('members') members: Member[]

  constructor() { }

  ngOnInit(): void {
  }

}
