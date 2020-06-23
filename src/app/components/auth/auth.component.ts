import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/security/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hide = true;
  login: string;
  password: string;

  loginForm: FormGroup;
  // loginForm: FormGroup = new FormGroup({
  //   $key: new FormControl(null),
  //   login: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        login: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit() {
    this.login = this.loginForm.get('login').value;
    this.password = this.loginForm.get('password').value;
    this.auth.authUser(this.login, this.password).subscribe(
      (utilisateur) => {
        console.log(utilisateur);
        this.router.navigate(['besoins']);
      }
    );
  }

}
