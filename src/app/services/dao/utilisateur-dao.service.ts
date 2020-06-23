import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from '../../interfaces/utilisateur';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurDaoService {

  constructor(private http: HttpClient) { }

  getUtilisateur(login: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(environment.urlServer + 'utilisateur/bylogin/' + login);
  }
}
