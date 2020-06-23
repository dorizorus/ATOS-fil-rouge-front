import { TestBed } from '@angular/core/testing';

import { UtilisateurDaoService } from './utilisateur-dao.service';

describe('UtilisateurDaoService', () => {
  let service: UtilisateurDaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurDaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
