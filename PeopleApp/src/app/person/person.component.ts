import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person: any; //Tells typescirpt this is a input from another component
  @Output() delete = new EventEmitter;  //Event emitters are used to call events (click, mouseover, keypress, etc.,)

  constructor(){

  }

  onDelete(event: any, personToDelete: string){  //Ran when delete clicked (via the HTML Angular event listener)
    //People list keeps track of people, so we invoke the people-list component
    event['delete-person'] = personToDelete;    //We are assuming all of the people are unique
    this.delete.emit(event);  //Send to list component
  }
}
