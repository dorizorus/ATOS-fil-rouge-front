import { TestBed } from '@angular/core/testing';

import { ServiceCompetenceService } from './service-competence.service';

describe('ServiceCompetenceService', () => {
  let service: ServiceCompetenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCompetenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
