/* tslint:disable:prefer-const */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {Utilisateur} from '../Model/Utilisateur';
import {environment} from '../../environments/environment';
import jwtDecode from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject !: BehaviorSubject<Utilisateur>;
  public currentUser !: Observable<Utilisateur>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): Utilisateur {
   return this.currentUserSubject.value;
   // return new Utilisateur();
  }

  // tslint:disable-next-line:typedef
  login(login: string, password: string) {
    return this.http.post<any>(environment.urlApi + '/login_check', { login, password })
      .pipe(map(data => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      }));
  }

  // tslint:disable-next-line:typedef
  getToken(data: any){
    let tokendecode = jwtDecode(data.token);
    return tokendecode;
  }
  // tslint:disable-next-line:typedef
  getRole(data: any){
     let tokendecode = jwtDecode(data.token);
     // @ts-ignore
     const role = tokendecode.roles[0];
     if (role === 'ROLE_ADMIN') {
       console.log('Je suis un admin');
       this.router.navigate(['/index']);
    }else {
       this.router.navigate(['/profils']);
     }
  }

  // tslint:disable-next-line:typedef
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
   // this.currentUser = new Observable<Utilisateur>();
    this.router.navigate(['/auth']);
  }
}
