/*import { Injectable } from '@angular/core';

@Injectable()*/

export class TareasGruposService {

  private tasksToday: Object[] = [];
  private tasksByGroup: Object[] = [];
  
  constructor() 
  {
    this.tasksByGroup = [];
  }

  //Array of groups
  groups = [{nombre: 'Trabajo', icono: 'business_center', resaltado: false},
            {nombre: 'Amigos', icono: 'people', resaltado: false},
            {nombre: 'Universidad', icono: 'school', resaltado: false}];

  //Array of tasks
  tasks = [
{titulo: 'Recoger libros', descripcion: 'ir por libros a la tienda', date: '2019-07-11', group:'Universidad'},
{titulo: 'Firmar Autorizacion', descripcion: 'Firma de autorizacion', date: '2019-07-12', group:'Trabajo'},
{titulo: 'Cita con Maria', descripcion: 'Comida con Maria', date: '2019-07-13', group:'Amigos'},
{titulo: 'Jugar fútbol', descripcion: 'Intento de jugar', date: '2019-7-28', group:'Amigos'},
{titulo: 'Comprar mercado', descripcion: 'Toca comprar comida', date: '2019-07-15', group:'Trabajo'}];

//Get all groups
getGroups(){
  return this.groups;
}

//Get pending tasks
getPendingTask(){
  return this.tasks;
}

// Get all task today
getPendingTaskToday(date){
  if (Object.keys(this.tasksToday).length == 0) {
    for (let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].date == date)
        this.tasksToday.push(this.tasks[i])
    }
  }
  return this.tasksToday;
}

// Get all task by group
getTaskByGroup(group: string){
  this.tasksByGroup = [];
  if (Object.keys(this.tasksByGroup).length == 0) {
    for (let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].group == group)
        this.tasksByGroup.push(this.tasks[i])
    }
  }
  return this.tasksByGroup;
  }
}
