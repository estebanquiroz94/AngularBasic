import { Component } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component' ;
import { InicioComponent } from './inicio/inicio.component' ;
import { NuevaTareaComponent } from './inicio/nueva-tarea/nueva-tarea.component';
import { VerGruposComponent } from './inicio/ver-grupos/ver-grupos.component' ;
import { TareasGruposService } from './inicio/tareas-grupos.service';
import { ConvertDatePipe } from './convert-date.pipe';

@Component({
  selector: 't-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TareasGruposService, ConvertDatePipe]
})
export class AppComponent {
  title = 'INICIO!';
}
