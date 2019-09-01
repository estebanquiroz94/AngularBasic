/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerGruposComponent } from './ver-grupos.component';

describe('VerGruposComponent', () => {
  let component: VerGruposComponent;
  let fixture: ComponentFixture<VerGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
