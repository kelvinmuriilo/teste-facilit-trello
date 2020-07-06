import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent implements OnInit {

  @Input('photoURL') photoURL: string;
  @Input('memberName') memberName: string;

  constructor() { }

  ngOnInit(): void {
    this.nameDisplay();
  }

  changeDisplay(){
    return this.photoURL == null || this.photoURL == undefined;
  }

  nameDisplay(): string{
    let name = this.memberName.split(' ');
    let abr = name.map(element => element.substr(0,1));

    return abr.toString().replace(',', '');
  }

}
