/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TareasGruposService } from './tareas-grupos.service';
import { DatePipe } from '@angular/common';

describe('TareasGruposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasGruposService, DatePipe]
    });
  });

  it('should ...', inject([TareasGruposService], (service: TareasGruposService) => {
    expect(service).toBeTruthy();
  }));
});
