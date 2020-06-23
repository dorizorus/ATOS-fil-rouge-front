import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Besoin} from '../interfaces/besoin';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BesoinsService {

  public readonly listBesoinsObservable$: BehaviorSubject<Besoin[]>;
  public readonly besoinObservable$: BehaviorSubject<Besoin>;

  constructor(private http: HttpClient) {
    this.listBesoinsObservable$ = new BehaviorSubject(null)
    this.besoinObservable$ = new BehaviorSubject(null);
  }



  public getBesoins() {
    return this.http.get<Besoin[]>(environment.urlServer + 'besoins/tous');
    // console.log(this.listBesoinsObservable$.getValue());
  }

  public editBesoin(besoin: Besoin) {
    return this.http.post(
      environment.urlServer + '/besoin/modifier/' + besoin.id + '/enregistrer',
      besoin);
  }

  public getBesoinById(id: number) {
    return this.http.get(environment.urlServer + 'besoin/modifier/' + id);
  }


}

