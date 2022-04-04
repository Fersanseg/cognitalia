import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocidadEscrituraComponent } from './velocidad-escritura.component';

describe('VelocidadEscrituraComponent', () => {
  let component: VelocidadEscrituraComponent;
  let fixture: ComponentFixture<VelocidadEscrituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelocidadEscrituraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocidadEscrituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
