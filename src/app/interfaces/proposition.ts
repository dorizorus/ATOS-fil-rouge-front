import {Besoin} from './besoin';
import {Collaborateur} from './collaborateur';
import {Statut} from './statut';
import {Utilisateur} from './utilisateur';
import {Commentaire} from './commentaire';

import {MatTableDataSource} from '@angular/material/table';

export interface Proposition {
  id: number;
  dateProposition: string;
  dateRelance: string;
  prixAchat: number;
  prixVente: number;
  besoin?: Besoin;
  collaborateur?: Collaborateur;
  statut?: Statut;
  utilisateur?: Utilisateur;
  commentaires?: Commentaire[] | MatTableDataSource<Commentaire>;
}
