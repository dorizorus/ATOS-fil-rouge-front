import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {map, catchError} from 'rxjs/operators';
import {Competence} from '../interfaces/competence';
import {environment} from '../../environments/environment';
import {AuthService} from './security/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ServiceCompetences {

  // urlBase : string = 'https://atos-fil-rouge-proud-impala-em.cfapps.io/competence/listecompetence';
  // urlBaseProd: string = 'https://atos-fil-rouge-proud-impala-em.cfapps.io/competence/listecompetence';
  urlFetchListeComp: string = environment.urlServer + 'competence/listecompetence';
  urlAjout: string = environment.urlServer + 'competence/ajoutercompetence';
  typeChoisi: string;



  public readonly listeCompetEtType$: BehaviorSubject<Competence[]> = new BehaviorSubject([]); // un type d'Observable qui permet non seulement de réagir à de nouvelles informations, mais également d'en émettre.
  // The reason for the empty array is that we don’t want to stream “undefined“

  constructor(private httpClient: HttpClient) {
  }

  readonly listeCompetencesObservable = new Observable(
    (observer) => {
      this.httpClient.get(this.urlFetchListeComp)
        .subscribe(
          (listeObjet: any[]) => {
            observer.next(listeObjet);
          }
        );
    }
  );

  getCompetences() {
    this.httpClient.get(this.urlFetchListeComp).subscribe(
      (competences: Competence[]) => {
        this.listeCompetEtType$.next(competences);
      }
    );
  }

  ajoutCompetence(compet: Competence) {
    console.log('Mis a jour avec nouvelle données');
    console.log(compet);


    return this.httpClient.post(this.urlAjout, compet);
  }

  deleteCompetence(): void {
    // a remplir
  }
}
