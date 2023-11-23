import { TestBed } from '@angular/core/testing';

import { ReportServicerService } from './report-servicer.service';

describe('ReportServicerService', () => {
  let service: ReportServicerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportServicerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
