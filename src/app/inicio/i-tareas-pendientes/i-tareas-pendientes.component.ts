import { Component, OnInit } from '@angular/core';
import { NuevaTareaComponent } from 'app/inicio/nueva-tarea/nueva-tarea.component';
import { TareasGruposService } from '../tareas-grupos.service';

@Component({
  selector: 'tareas-pendientes',
  templateUrl: './i-tareas-pendientes.component.html',
  styleUrls: ['./i-tareas-pendientes.component.css']
})
export class ITareasPendientesComponent implements OnInit {
  
  // Array for pending tasks 
  pendingTasks : Object[];

  //Constructor
  constructor(private _tasksGroupService : TareasGruposService) 
  {
    //To get pending tasks
    this.pendingTasks = this._tasksGroupService.getPendingTask();     
  }

  ngOnInit() {
  }
}
