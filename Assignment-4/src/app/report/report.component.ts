import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  @Input() report: any; //Tells typescirpt this is a input from another component
  @Output() delete = new EventEmitter;  //Event emitters are used to call events (click, mouseover, keypress, etc.,)

  constructor(){

  }

  onDelete(event: any, reportToDelete: string){  //Ran when delete clicked (via the HTML Angular event listener)
    event['delete-report'] = reportToDelete;    //We are assuming all of the reports are unique
    this.delete.emit(event);  //Send to list component
  }
}
