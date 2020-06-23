import {Competence} from './competence';
import {MatTableDataSource} from '@angular/material/table';
import {Client} from './client';
import {SiteClient} from './site-client';
import {ContactClient} from './contact-client';
import {Proposition} from './proposition';
import {Agence} from './agence';
import {Commentaire} from './commentaire';


export interface Besoin {

  id: number;
  titre: string;
  dateEmission: string;
  dateEcheance: string;
  estOuvert: boolean;
  estSatisfait: boolean;
  estRecurrent: boolean;
  competences?: Competence[] | MatTableDataSource<Competence>;
  client?: Client;
  siteClient?: SiteClient;
  contactClient?: ContactClient;
  propositions?: Proposition[] | MatTableDataSource<Proposition>;
  agence?: Agence;
  commentaires?: Commentaire[] | MatTableDataSource<Commentaire>;

}
