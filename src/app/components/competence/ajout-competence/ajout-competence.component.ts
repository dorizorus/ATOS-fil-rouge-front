import {Component, OnInit, OnDestroy} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ServiceCompetences} from '../../../services/service-competence.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ajout-competence',
  templateUrl: './ajout-competence.component.html',
  styleUrls: ['./ajout-competence.component.scss']
})
export class AjoutCompetenceComponent implements OnInit, OnDestroy {

  value = 'Clear me';
  typeChoisi: string;
  private souscription: Subscription;
  listeTypesCompetences: string[];
  form: FormGroup = new FormGroup({
      libelleChoisi: new FormControl('', Validators.required)
    }
  );

  constructor(private serviceCompetence: ServiceCompetences, private router: Router) {
  }

  ngOnInit(): void {
    this.getCompetences();
  }

  getCompetences() {
    this.serviceCompetence.getCompetences();
    this.souscription = this.serviceCompetence.listeCompetEtType$.subscribe(
      (data) => {
        this.listeTypesCompetences = data
          .map(competence => competence.type)
          .filter((value, index, self) => self.indexOf(value) === index);
        this.listeTypesCompetences.sort();
      }
    );
    this.typeChoisi = this.serviceCompetence.typeChoisi;
  }


  onEnvoi() {
    const competence = {type: this.typeChoisi, libelle: this.form.get('libelleChoisi').value};
    this.serviceCompetence.ajoutCompetence(competence)
      . subscribe(
        (valeurDeRetour) => {
          console.log(valeurDeRetour);
          this.router.navigate(['competences']);
        },
        (erreur: any) => console.error('Probleme dans la fonction majjListeCompetenceEtType'),
        () => console.log('Chargement fini')
      );
  }

  ngOnDestroy(): void {
    this.souscription.unsubscribe();
  }

}
