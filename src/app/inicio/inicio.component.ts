import { Component, OnInit } from '@angular/core';
import { ITareasHoyComponent } from './i-tareas-hoy/i-tareas-hoy.component';
import { ITareasPendientesComponent } from './i-tareas-pendientes/i-tareas-pendientes.component';
import { ITareasGruposComponent } from './i-tareas-grupos/i-tareas-grupos.component';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
