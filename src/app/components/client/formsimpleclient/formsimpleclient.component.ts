import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Client} from '../../../interfaces/client';
import {SiteClient} from '../../../interfaces/site-client';
import {ContactClient} from '../../../interfaces/contact-client';
import {ClientDaoService} from '../../../services/dao/client-dao.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-formsimpleclient',
  templateUrl: './formsimpleclient.component.html',
  styleUrls: ['./formsimpleclient.component.scss']
})
export class FormsimpleclientComponent implements OnInit {
  labelPosition: 'before' | 'after' = 'before';
  checked: false;
  form: FormGroup;
  client: Client;
  site: SiteClient;
  contact: ContactClient;

  constructor(private fb: FormBuilder, private clientDao: ClientDaoService, private router: Router) {
    this.form = this.fb.group({
      nom: '',
      ville: '',
      adresse: '',
      clientActif: this.checked,
      nomContact: '',
      prenomContact: '',
      poste: '',
      mail: '',
      portable: '',
      fixe: '',
      fax: ''
    });

    this.site = {
      nomVille: '',
      adresse: '',
      estActif: false
    };

    this.contact = {
      nom: '',
      prenom: '',
      position: '',
      email: '',
      numTelPerso: '',
      numTelPro: '',
      numFax: '',
      site: null,
    };

    this.client = {
      nom: '',
      sites: [this.site],
      contacts: [this.contact]
    };
  }

  ngOnInit(): void {
  }

  onAdd() {
    // creer objet site
    this.site.nomVille = this.form.get('ville').value;
    this.site.adresse = this.form.get('adresse').value;

    // creer objet contact
    this.contact.nom = this.form.get('nomContact').value;
    this.contact.prenom = this.form.get('prenomContact').value;
    this.contact.position = this.form.get('poste').value;
    this.contact.email = this.form.get('mail').value;
    this.contact.numTelPerso = this.form.get('portable').value;
    this.contact.numTelPro = this.form.get('fixe').value;
    this.contact.numFax = this.form.get('fax').value;
    this.contact.site = this.site;

    // creer objet client
    this.client.nom = this.form.get('nom').value;
    this.client.sites = [this.site];
    this.client.contacts = [this.contact];
    console.log(this.client.contacts);

    // TODO: fix it, ça fonctionne à moitié, ça n'enregistre pas le contact
    // le format est pourtant le bon, c'est comme
    // s'il n'arrivait pas à prendre le site lié au contact
    this.clientDao.ajouterClient(this.client)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['besoins']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
