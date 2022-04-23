import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalResultsComponent } from './global-results.component';

describe('GlobalResultsComponent', () => {
  let component: GlobalResultsComponent;
  let fixture: ComponentFixture<GlobalResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
