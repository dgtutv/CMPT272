import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  person: any;

  constructor(){
    this.person = {
      name: 'Bobby',
      instructor: true,
      added_on: new Date().getTime() //Num of ms since a given time
    };
  }
}
