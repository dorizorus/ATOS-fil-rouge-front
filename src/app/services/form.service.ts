import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from '../interfaces/client';
import {AuthService} from './security/auth.service';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  body;
  private idClient;

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

addClient(client: Client) {
    this.body = client;
    const headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: `Bearer ${this.auth.getToken()}`});
    this.httpClient
    .post('http://localhost:8080/addclient', this.body, {headers})
    .subscribe(
      (response)  => {
    console.log(response);
      }
    );
  }

// addSiteClient(nomVille: string, adresse: string, isActif: boolean, idClient: number) {
//   this.body = {adresse: adresse, est_actif: isActif, nomVille: nomVille, client : {id : idClient}};
//   let headers = new HttpHeaders({'Content-Type': 'application/json'});
//   this.httpClient
//     .put('http://localhost:8080/addsiteclient', this.body, {headers})
//     .subscribe();
// }

// addContactClient() {
//   this.body = {adresse: adresse, est_actif: isActif, nomVille: nomVille, client : {id : idClient}};
//   let headers = new HttpHeaders({'Content-Type': 'application/json'});
//   this.httpClient
//     .put('http://localhost:8080/addsiteclient', this.body, {headers})
//     .subscribe();
// }
}
