import { TestBed } from '@angular/core/testing';

import { HomeMockupServiceService } from './home-mockup-service.service';

describe('HomeMockupServiceService', () => {
  let service: HomeMockupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeMockupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
