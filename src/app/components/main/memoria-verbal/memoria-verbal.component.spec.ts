import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriaVerbalComponent } from './memoria-verbal.component';

describe('MemoriaVerbalComponent', () => {
  let component: MemoriaVerbalComponent;
  let fixture: ComponentFixture<MemoriaVerbalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriaVerbalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriaVerbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
