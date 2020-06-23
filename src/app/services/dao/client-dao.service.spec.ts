import { TestBed } from '@angular/core/testing';

import { ClientDaoService } from './client-dao.service';

describe('ClientDaoService', () => {
  let service: ClientDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
