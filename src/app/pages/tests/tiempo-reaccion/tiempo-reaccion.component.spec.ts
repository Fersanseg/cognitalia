import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoReaccionComponent } from './tiempo-reaccion.component';

describe('TiempoReaccionComponent', () => {
  let component: TiempoReaccionComponent;
  let fixture: ComponentFixture<TiempoReaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempoReaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoReaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
