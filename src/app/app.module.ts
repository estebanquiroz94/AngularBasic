import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { ITareasPendientesComponent } from './inicio/i-tareas-pendientes/i-tareas-pendientes.component';
import { ITareasHoyComponent } from './inicio/i-tareas-hoy/i-tareas-hoy.component';
import { ITareasGruposComponent } from './inicio/i-tareas-grupos/i-tareas-grupos.component';
import { NuevaTareaComponent } from './inicio/nueva-tarea/nueva-tarea.component';
import { VerGruposComponent } from './inicio/ver-grupos/ver-grupos.component';

import { L3RoutingModule } from './app-routing.module';
import { ConvertDatePipe } from './convert-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    ITareasPendientesComponent,
    ITareasHoyComponent,
    ITareasGruposComponent,
    NuevaTareaComponent,
    VerGruposComponent,
    ConvertDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    L3RoutingModule
  ],
  providers: [ConvertDatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
