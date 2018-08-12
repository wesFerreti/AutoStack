import { TestBed, inject } from '@angular/core/testing';

import { addressService } from './address.service';

describe('addressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [addressService]
    });
  });

  it('should be created', inject([addressService], (service: addressService) => {
    expect(service).toBeTruthy();
  }));
});
