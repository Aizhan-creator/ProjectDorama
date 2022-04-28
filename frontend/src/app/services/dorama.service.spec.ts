import { TestBed } from '@angular/core/testing';

import { doramaService } from './dorama.service';

describe('doramaService', () => {
  let service: doramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(doramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
