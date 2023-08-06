import { TestBed } from '@angular/core/testing';

import { StreamingInfoService } from './streaming-info.service';

describe('StreamingInfoService', () => {
  let service: StreamingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamingInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
