import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesDurasComponent } from './habilidades-duras.component';

describe('HabilidadesDurasComponent', () => {
  let component: HabilidadesDurasComponent;
  let fixture: ComponentFixture<HabilidadesDurasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HabilidadesDurasComponent]
    });
    fixture = TestBed.createComponent(HabilidadesDurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
