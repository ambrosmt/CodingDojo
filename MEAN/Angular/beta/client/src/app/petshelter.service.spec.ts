import { TestBed, inject } from '@angular/core/testing';

import { PetshelterService } from './petshelter.service';

describe('PetshelterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetshelterService]
    });
  });

  it('should be created', inject([PetshelterService], (service: PetshelterService) => {
    expect(service).toBeTruthy();
  }));
});
