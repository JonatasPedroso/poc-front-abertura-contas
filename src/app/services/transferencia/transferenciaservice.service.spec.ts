import {TestBed} from '@angular/core/testing';

import {TransferenciaserviceService} from './transferenciaservice.service';

describe('TransferenciaserviceService', () => {
  let service: TransferenciaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferenciaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
