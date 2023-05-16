import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadDuraIndividualComponent } from './habilidad-dura-individual.component';

describe('HabilidadDuraIndividualComponent', () => {
  let component: HabilidadDuraIndividualComponent;
  let fixture: ComponentFixture<HabilidadDuraIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadDuraIndividualComponent]
    });
    fixture = TestBed.createComponent(HabilidadDuraIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
