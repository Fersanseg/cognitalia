import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaNumericaComponent } from './memoria-numerica.component';

describe('MemoriaNumericaComponent', () => {
  let component: MemoriaNumericaComponent;
  let fixture: ComponentFixture<MemoriaNumericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriaNumericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaNumericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
