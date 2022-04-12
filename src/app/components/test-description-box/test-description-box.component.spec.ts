import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDescriptionBoxComponent } from './test-description-box.component';

describe('TestDescriptionBoxComponent', () => {
  let component: TestDescriptionBoxComponent;
  let fixture: ComponentFixture<TestDescriptionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDescriptionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDescriptionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
