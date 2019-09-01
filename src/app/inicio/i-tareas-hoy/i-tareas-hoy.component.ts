import { Component, OnInit } from '@angular/core';
import { TareasGruposService } from '../tareas-grupos.service';
import { ConvertDatePipe } from '../../convert-date.pipe';


@Component({
  selector: 'tareas-hoy',
  templateUrl: './i-tareas-hoy.component.html',
  styleUrls: ['./i-tareas-hoy.component.css']
})
export class ITareasHoyComponent implements OnInit {

  // Array for pending tasks
  pendingTask : Object[] = [];
  
  // Get today Date
  todayDate = new Date("2019-08-29");
  newDate : string;
  
  //Constructor
  constructor(private _dataService : TareasGruposService, private _dateFormatPipe:ConvertDatePipe)
  {
    //Invoke transform method from datePipe for new date
    this.newDate = _dateFormatPipe.transform(this.todayDate);

    //Get all today tasks
    this.pendingTask = this._dataService.getPendingTaskToday(this.newDate);  

  }

  ngOnInit() { }

}
