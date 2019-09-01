import { Component, OnInit } from '@angular/core';
import { TareasGruposService } from '../tareas-grupos.service';

@Component({
  selector: 'tareas-grupos',
  templateUrl: './i-tareas-grupos.component.html',
  styleUrls: ['./i-tareas-grupos.component.css']
})
export class ITareasGruposComponent implements OnInit {

  //Array for groups
  groups : Object[];
  
  //Constructor
  constructor(private dataService: TareasGruposService) 
  {
    //Get all groups
    this.groups = this.dataService.getGroups();
  }

  ngOnInit() {
  
  }  

  //Stand out a icon
  onHoverGroupIn(item){
    item.resaltado = true;
  }

  //Inverse process
  onHoverGroupOut(item){
    item.resaltado = false;
  }
}
