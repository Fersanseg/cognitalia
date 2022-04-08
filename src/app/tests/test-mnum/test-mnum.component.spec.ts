import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMNumComponent } from './test-mnum.component';

describe('TestMNumComponent', () => {
  let component: TestMNumComponent;
  let fixture: ComponentFixture<TestMNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
