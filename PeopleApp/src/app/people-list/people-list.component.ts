import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people;
  query: string;
  constructor(){
    this.query = '';
    this.people = [
      {
      name: 'Bobby',
      instructor: true,
      added_on: new Date().getTime() //Num of ms since a given time
      },
      {
        name: 'Jenny',
        instructor: true,
        added_on: new Date().getTime() //Num of ms since a given time
      },
      {
        name: 'Jane',
        instructor: true,
        added_on: new Date().getTime() //Num of ms since a given time
      },
      {
        name: 'Steve',
        instructor: true,
        added_on: new Date().getTime() //Num of ms since a given time
      },
    ];
  };
}
