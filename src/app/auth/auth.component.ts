import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {any} from 'codelyzer/util/function';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {AuthenticationService} from '../Service/authservice';
import {Utilisateur} from '../Model/Utilisateur';
import {JwtHelperService} from '@auth0/angular-jwt';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  submitted = false;
  loginForm !: FormGroup;
  loading = false;
  returnUrl !: string;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // Appel de notre service
    this.authservice.login(this.f.login.value, this.f.password.value)
      .pipe()
      //inscription à l'venement pour recevoir les donnéés
      .subscribe(
        // Si les données sont là
        data => {
          //console.log(data);
        // @ts-ignore
          this.authservice.getRole(data);
        },
        // S'il y'a erreur
        error => {
          console.log('error');
        }
      );
  }
}
