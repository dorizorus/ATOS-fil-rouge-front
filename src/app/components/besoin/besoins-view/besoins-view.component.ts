import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {BesoinsService} from '../../../services/besoins.service';
import {MatTableDataSource} from '@angular/material/table';
import {Besoin} from '../../../interfaces/besoin';
import {MatSort} from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Commentaire} from '../../../interfaces/commentaire';
import {Proposition} from '../../../interfaces/proposition';
import {Router} from '@angular/router';

@Component({
  selector: 'app-besoins-view',
  templateUrl: './besoins-view.component.html',
  styleUrls: ['./besoins-view.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class BesoinsViewComponent implements OnInit, OnDestroy {

  @ViewChild('outerSort', {static: true}) sort: MatSort;

  besoinsSubscription: Subscription;
  listBesoins: Besoin[] = [];
  dataSource: MatTableDataSource<Besoin>;
  outerDisplayedColumns: string[] = ['id', 'titre', 'dateEmission', 'client', 'dateEcheance', 'competences', 'agence', 'estSatisfait', 'actions'];
  innerDisplayedColumns: string[] = ['id', 'dateProposition', 'dateRelance', 'collaborateur', 'prixAchat', 'prixVente', 'statut'];
  innerCompetences: "compétences";
  innerCommentaires: string[] = ['commentaire'];
  expandedElement: Besoin | null;

  constructor(private besoinsService: BesoinsService, private cd: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {


    // le but de cette fonction est de parcourir les éléments (ici les besoins) et pour chaque élément (besoin)
    // d'aller transformer les propositions et commentaires en MatTableDataSource qui permettent d'exploiter
    // les données de manière plus avancée.
    // j'arrive à transformer un des tableaux (propositions ou commentaires) mais pas les deux en même temps.
    // Eventuellement, il faudrait faire la même chose pour les compétences.
    this.besoinsSubscription = this.besoinsService.getBesoins().subscribe(
      (besoins: Besoin[]) => {
        besoins.forEach((besoin) => {
            if (besoin.propositions && Array.isArray(besoin.propositions) && besoin.propositions.length) {
              this.listBesoins = [...this.listBesoins, {...besoin, propositions: new MatTableDataSource(besoin.propositions)}];
            } else {
              this.listBesoins = [...this.listBesoins, besoin];
            }
          });
        this.dataSource = new MatTableDataSource(this.listBesoins);
        this.dataSource.sort = this.sort;
      }
    );
  }


  // affiche les éléments cachés si il y en a à montrer
  toggleRow(element: Besoin) {
    element.propositions && (element.propositions as MatTableDataSource<Proposition>).data?.length ?
      (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.besoinsSubscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    // TODO: fix it somehow
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editBesoin(besoin: Besoin) {
    console.log(besoin);
    this.besoinsService.besoinObservable$.next(besoin);
    this.router.navigate(['besoin/edit/' + besoin.id]);
  }

  addComment(besoin: Besoin) {
    // TODO: écrire la méthode etc.
  }
}
