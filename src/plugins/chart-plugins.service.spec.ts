import { TestBed, inject } from '@angular/core/testing';

import { ChartPluginsService } from './chart-plugins.service';

describe('ChartPluginsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartPluginsService]
    });
  });

  it('should be created', inject([ChartPluginsService], (service: ChartPluginsService) => {
    expect(service).toBeTruthy();
  }));
});
