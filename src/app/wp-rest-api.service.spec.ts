import { TestBed } from '@angular/core/testing';

import { WpRestApiService } from './wp-rest-api.service';

describe('WpRestApiService', () => {
  let service: WpRestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WpRestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
