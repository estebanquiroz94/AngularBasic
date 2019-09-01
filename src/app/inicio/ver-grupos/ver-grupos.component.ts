import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasGruposService } from '../tareas-grupos.service';


@Component({
  selector: 'ver-grupos',
  templateUrl: './ver-grupos.component.html',
  styleUrls: ['./ver-grupos.component.css']
})
export class VerGruposComponent implements OnInit {

  //Tasks by group
  taskByGroup: Object[];

  //Name of group
  groupName : any;
  
  //Constructor 
  constructor(private _activatedRoute : ActivatedRoute, private _tasksGroupService: TareasGruposService) 
  {
    //To set gruoup name recived from view
    this.groupName = this._activatedRoute.snapshot.params['nombre'];

    //To get all tasks for group recived
    this.taskByGroup = _tasksGroupService.getTaskByGroup(this.groupName);
    
  }

  ngOnInit() {
  }

}
