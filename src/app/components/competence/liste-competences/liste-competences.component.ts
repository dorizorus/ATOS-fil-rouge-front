import {Component, OnInit} from '@angular/core';
import {ServiceCompetences} from '../../../services/service-competence.service';
import {Competence} from '../../../interfaces/competence';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-competences',
  templateUrl: './liste-competences.component.html',
  styleUrls: ['./liste-competences.component.scss']
})
export class ListeCompetencesComponent implements OnInit {


  constructor(private serviceCompetences: ServiceCompetences, private router: Router) {
  }

  listeCompet: Competence[];
  listeTypesCompet: string[];
  statutPanneau = false;
  type = null;
  subscription: Subscription;
  typeChoisi: string;

  ngOnInit(): void {
    this.listeCompetences();
  }

  listeCompetences() {
    this.serviceCompetences.getCompetences();
    this.subscription = this.serviceCompetences.listeCompetEtType$.subscribe(
      (data) => {
        this.listeCompet = data;
        this.listeTypesCompet = data.map(competence => competence.type)
          .filter((value, index, self) => self.indexOf(value) === index);
        this.listeTypesCompet.sort();
      }
    );
  }

  addCompetence(type: string){
    this.serviceCompetences.typeChoisi = type;
    this.router.navigate(['/competence/ajouter']);
  }

  /*quelleType() {
    this.serviceCompetences.changerMethode(this.type)
  }*/

  afficherType(competence: Competence) {
    const index = this.listeCompet.findIndex(competRecherche => competRecherche.id == competence.id);
    console.log(this.listeCompet[index].type);
  }
}
