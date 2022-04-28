import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTestGlobalResultsComponent } from './single-test-global-results.component';

describe('SingleTestGlobalResultsComponent', () => {
  let component: SingleTestGlobalResultsComponent;
  let fixture: ComponentFixture<SingleTestGlobalResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTestGlobalResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTestGlobalResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
