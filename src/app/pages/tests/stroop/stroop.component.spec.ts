import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StroopComponent } from './stroop.component';

describe('StroopComponent', () => {
  let component: StroopComponent;
  let fixture: ComponentFixture<StroopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StroopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StroopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
