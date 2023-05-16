import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeMiComponent } from './acerca-de-mi.component';

describe('AcercaDeMiComponent', () => {
  let component: AcercaDeMiComponent;
  let fixture: ComponentFixture<AcercaDeMiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcercaDeMiComponent]
    });
    fixture = TestBed.createComponent(AcercaDeMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
