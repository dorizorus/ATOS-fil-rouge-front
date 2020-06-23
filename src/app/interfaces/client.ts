import {SiteClient} from './site-client';
import {ContactClient} from './contact-client';

export interface Client {

  id?: number;
  nom: string;
  sites?: SiteClient[];
  contacts?: ContactClient[];

}
