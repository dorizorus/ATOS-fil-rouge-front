import {SiteClient} from './site-client';

export interface ContactClient {
  id?: number;
  nom?: string;
  prenom?: string;
  position?: string;
  email?: string;
  numTelPerso?: string;
  numTelPro?: string;
  numFax?: string;
  site?: SiteClient;
}
