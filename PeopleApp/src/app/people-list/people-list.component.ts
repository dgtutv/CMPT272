import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people:any[] = this.ps.get();
  query: string
  constructor(private ps:PeopleService){
    this.query = ''
  }

  onPersonDelete(evt:any) {
    let delete_person = evt['delete_person'] 
    // this.people = this.people.filter((p) => p.name != delete_person)
    this.people = this.ps.delete(delete_person)
  }

  ngOnInit(): void {
      this.people = this.ps.get()
  }
}
