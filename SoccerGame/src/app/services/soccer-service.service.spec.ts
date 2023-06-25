import { TestBed } from '@angular/core/testing';

import { SoccerServiceService } from './soccer-service.service';

describe('SoccerServiceService', () => {
  let service: SoccerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoccerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
