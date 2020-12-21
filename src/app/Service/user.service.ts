import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Utilisateur} from '../Model/Utilisateur';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.urlApi;
  constructor(private http: HttpClient) { }
  getUsers(): Observable <Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.url + '/admin/utilisateurs');
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(this.url + '/admin/utilisateurs/' + id);
  }
}
