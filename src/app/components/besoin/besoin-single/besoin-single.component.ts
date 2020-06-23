import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BesoinsService} from '../../../services/besoins.service';
import {Besoin} from '../../../interfaces/besoin';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-besoin-single',
  templateUrl: './besoin-single.component.html',
  styleUrls: ['./besoin-single.component.scss']
})
export class BesoinSingleComponent implements OnInit, OnDestroy {

  besoinForm: FormGroup;
  labelPosition: 'before' | 'after' = 'before';
  besoin: Besoin;
  testBesoin: Besoin;
  souscription: Subscription;

  constructor(private formBuilder: FormBuilder, private besoinsService: BesoinsService, private router: Router) { }

  ngOnInit(): void {
    this.souscription = this.besoinsService.besoinObservable$.subscribe(
      (besoin: Besoin) => {
        this.besoin = besoin;
      }
    );
    this.besoinForm = this.formBuilder.group(
      {
        titre: [this.besoin.titre, Validators.required],
        dateEmission: [this.besoin.dateEmission, Validators.required],
        dateEcheance: [this.besoin.dateEcheance, Validators.required],
        estOuvert: [this.besoin.estOuvert, Validators.required],
        estSatisfait: [this.besoin.estSatisfait, Validators.required],
        estRecurrent: [this.besoin.estRecurrent, Validators.required],
      }
    );
  }

  onSubmit() {
    this.besoin.titre = this.besoinForm.get('titre').value;
    this.besoin.dateEmission = this.besoinForm.get('dateEmission').value;
    this.besoin.dateEcheance = this.besoinForm.get('dateEcheance').value;
    this.besoin.estOuvert = this.besoinForm.get('estOuvert').value;
    this.besoin.estSatisfait = this.besoinForm.get('estSatisfait').value;
    this.besoin.estRecurrent = this.besoinForm.get('estRecurrent').value;

    // TODO: fix it
    this.besoinsService.editBesoin(this.besoin).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['besoins']);
      },
      (error) => {
        console.log(error);
      },
    );
  }

    ngOnDestroy() {
    this.souscription.unsubscribe();
  }

}
