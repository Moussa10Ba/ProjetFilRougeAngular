import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {Profils} from '../Model/Profils';
import {Utilisateur} from '../Model/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  profilUrl = environment.urlApi;
  constructor(private http: HttpClient) {
  }
  getProfils(): Observable<Profils[]> {
      return this.http.get<Profils[]>(this.profilUrl + '/admin/profils?archive=false');
  }

  deleteProfil(id: number): Observable<any>{
    return this.http.delete<any>(this.profilUrl + '/admin/profils/' + id);
  }
  addProfil(profil: Profils): Observable<Profils>{
    return this.http.post<Profils>(this.profilUrl + '/admin/profils', profil);
  }

  getUsersByProfil(id: number): Observable<any>{
    return this.http.get<any>(this.profilUrl + '/admin/profils/' + id + '/utilisateurs');
  }
}
