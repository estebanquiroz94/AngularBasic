import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NuevaTareaComponent } from './inicio/nueva-tarea/nueva-tarea.component';
import { VerGruposComponent } from './inicio/ver-grupos/ver-grupos.component';

const routes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'nueva', component: NuevaTareaComponent},
    //Se agrega :parametro -> Cuando se requiere el envío de información para la siguiente vista
    { path: 'verGrupo/:nombre', component: VerGruposComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class L3RoutingModule { }
  