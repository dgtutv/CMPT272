import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people;
  query: string;
  onPersonDelete(event: any){
    let personToDelete  = event['delete-person'];
    this.people = this.people.filter((p) => p.name != personToDelete);  
  }
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
        instructor: false,
        added_on: new Date().getTime() //Num of ms since a given time
      },
      {
        name: 'Jane',
        instructor: true,
        added_on: new Date().getTime() //Num of ms since a given time
      },
      {
        name: 'Steve',
        instructor: false,
        added_on: new Date().getTime() //Num of ms since a given time
      },
    ];
  };


}
