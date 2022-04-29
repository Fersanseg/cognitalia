import { TestBed } from '@angular/core/testing';

import { MnumService } from './mnum.service';

describe('MnumService', () => {
  let service: MnumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MnumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
