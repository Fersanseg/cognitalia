import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoRowsTextblockComponent } from './two-rows-textblock.component';

describe('TwoRowsTextblockComponent', () => {
  let component: TwoRowsTextblockComponent;
  let fixture: ComponentFixture<TwoRowsTextblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoRowsTextblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoRowsTextblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
