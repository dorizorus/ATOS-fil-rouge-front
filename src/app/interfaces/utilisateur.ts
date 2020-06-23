import {Proposition} from './proposition';
import {MatTableDataSource} from '@angular/material/table';
import {Role} from './role';

export interface Utilisateur {
  id: number;
  login: string;
  nom: string;
  prenom: string;
  role: Role;
  propositions?: Proposition[] | MatTableDataSource<Proposition>;
}
