import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTRComponent } from './test-tr.component';

describe('TestTRComponent', () => {
  let component: TestTRComponent;
  let fixture: ComponentFixture<TestTRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
