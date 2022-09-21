import { TestBed } from '@angular/core/testing';

import { EmpoloyeService } from './empoloye.service';

describe('EmpoloyeService', () => {
  let service: EmpoloyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpoloyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
