import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BesoinsViewComponent} from './components/besoin/besoins-view/besoins-view.component';
import {BesoinSingleComponent} from './components/besoin/besoin-single/besoin-single.component';
import {AuthComponent} from './components/auth/auth.component';
import {ListeCompetencesComponent} from './components/competence/liste-competences/liste-competences.component';
import {AjoutCompetenceComponent} from './components/competence/ajout-competence/ajout-competence.component';
import {AuthGuardService} from './services/security/auth-guard.service';
import {FormsimpleclientComponent} from './components/client/formsimpleclient/formsimpleclient.component';


const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'besoins', component: BesoinsViewComponent, canActivate: [AuthGuardService]},
  { path: 'besoin/edit/:id', component: BesoinSingleComponent, canActivate: [AuthGuardService]},
  { path: 'competences', component: ListeCompetencesComponent, canActivate: [AuthGuardService]},
  { path: 'client/ajouter', component: FormsimpleclientComponent, canActivate: [AuthGuardService]},
  { path: 'competence/ajouter', component: AjoutCompetenceComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
