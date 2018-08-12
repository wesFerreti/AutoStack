import { TestBed, inject } from '@angular/core/testing';

import { ResizableService } from './resizable/resizable.service';

describe('ResizableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResizableService]
    });
  });

  it('should be created', inject([ResizableService], (service: ResizableService) => {
    expect(service).toBeTruthy();
  }));
});
