import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../../interfaces/client';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientDaoService {

  constructor(private http: HttpClient) { }

  ajouterClient(client: Client) {

    return this.http.post(environment.urlServer + 'addclient', client);
  }
}
