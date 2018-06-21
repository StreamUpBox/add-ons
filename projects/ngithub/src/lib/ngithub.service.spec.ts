import { TestBed, inject } from '@angular/core/testing';

import { NGithubService } from './ngithub.service';

describe('NGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NGithubService]
    });
  });

  it('should be created', inject([NGithubService], (service: NGithubService) => {
    expect(service).toBeTruthy();
  }));
});
