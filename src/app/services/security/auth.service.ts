import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Utilisateur} from '../../interfaces/utilisateur';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {UtilisateurDaoService} from '../dao/utilisateur-dao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly utilisateurConnecte$: BehaviorSubject<Utilisateur>;

  constructor(private http: HttpClient, private utilisateurDao: UtilisateurDaoService, private router: Router) {
    this.utilisateurConnecte$ = new BehaviorSubject(null);
    const token: string = localStorage.getItem('token');

    if (token != null) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.utilisateurDao.getUtilisateur(payload.sub).subscribe(
        (utilisateur) => {
          this.utilisateurConnecte$.next(utilisateur);
        }
      );
    }
  }


  // prodUrl = 'https://atos-fil-rouge-proud-impala-em.cfapps.io/authentification';
  // devUrl = 'http://localhost:8080/authentification';


  getToken() {
    return localStorage.getItem('token');
  }

  authUser(login: string, password: string): Observable<Utilisateur> {
    const jsonBody = {login, password};

    return new Observable<Utilisateur>((observer) =>
      this.http.post(
        environment.urlServer + 'authentification',
        {login, password},
        {responseType: 'text'}
      ).subscribe(
        (token) => {

          localStorage.setItem('token', token);
          const payload = JSON.parse(atob(token.split('.')[1]));
          console.log(payload);

          this.utilisateurDao.getUtilisateur(payload.sub).subscribe(
            (utilisateur: Utilisateur) => {
              this.utilisateurConnecte$.next(utilisateur);
              observer.next(utilisateur);
            }
          );
        }
      )
    );
  }

  isAuthed(): boolean {
    const token = localStorage.getItem('token');
    return (token !== null);
  }
}
