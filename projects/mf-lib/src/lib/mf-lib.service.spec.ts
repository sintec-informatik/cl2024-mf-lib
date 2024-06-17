import { TestBed } from '@angular/core/testing';

import { MfLibService } from './mf-lib.service';

describe('MfLibService', () => {
  let service: MfLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
