import { TestBed } from '@angular/core/testing';

import { HomeRESTService } from './home-rest.service';

describe('HomeRESTService', () => {
  let service: HomeRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
