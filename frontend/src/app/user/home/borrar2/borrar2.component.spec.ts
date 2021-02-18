import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Borrar2Component } from './borrar2.component';

describe('Borrar2Component', () => {
  let component: Borrar2Component;
  let fixture: ComponentFixture<Borrar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Borrar2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Borrar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
