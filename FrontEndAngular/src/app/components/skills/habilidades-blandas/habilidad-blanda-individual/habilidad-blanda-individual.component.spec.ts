import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadBlandaIndividualComponent } from './habilidad-blanda-individual.component';

describe('HabilidadBlandaIndividualComponent', () => {
  let component: HabilidadBlandaIndividualComponent;
  let fixture: ComponentFixture<HabilidadBlandaIndividualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadBlandaIndividualComponent]
    });
    fixture = TestBed.createComponent(HabilidadBlandaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
