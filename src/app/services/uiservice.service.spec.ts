import { TestBed, inject } from '@angular/core/testing';

import { UIServiceService } from './uiservice.service';

describe('UIServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UIServiceService]
    });
  });

  it('should be created', inject([UIServiceService], (service: UIServiceService) => {
    expect(service).toBeTruthy();
  }));
});
