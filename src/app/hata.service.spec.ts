import { TestBed } from '@angular/core/testing';

import { HataService } from './hata.service';

describe('HataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HataService = TestBed.get(HataService);
    expect(service).toBeTruthy();
  });
});
