import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Utilisateur} from '../../interfaces/utilisateur';
import {AuthService} from '../../services/security/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(private auth: AuthService, private breakpointObserver: BreakpointObserver) {
  }

  utilisateurConnecte: Utilisateur

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.auth.utilisateurConnecte$.subscribe(
      u => this.utilisateurConnecte = u
    );
  }

}
