import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BesoinsViewComponent } from './components/besoin/besoins-view/besoins-view.component';
import { BesoinSingleComponent } from './components/besoin/besoin-single/besoin-single.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {AuthComponent} from './components/auth/auth.component';
import {ListeCompetencesComponent} from './components/competence/liste-competences/liste-competences.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {AjoutCompetenceComponent} from './components/competence/ajout-competence/ajout-competence.component';
import {MatSelectModule} from '@angular/material/select';
import {RequestInterceptorService} from './services/security/request-interceptor.service';
import {FormsimpleclientComponent} from './components/client/formsimpleclient/formsimpleclient.component';


@NgModule({
  declarations: [
    AjoutCompetenceComponent,
    AppComponent,
    AuthComponent,
    BesoinsViewComponent,
    BesoinSingleComponent,
    FormsimpleclientComponent,
    ListeCompetencesComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatChipsModule,
    MatSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
