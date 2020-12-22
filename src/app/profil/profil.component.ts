import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../Service/profil.service';
import {Profils} from '../Model/Profils';
import {environment} from '../../environments/environment';
import {Utilisateur} from '../Model/Utilisateur';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profils: Profils[] = [];
  displayedColumns  = ['id', 'libelle', 'archive', 'edit', 'delete', 'users'];
  displayedColumsUsers = ['id', 'nom', 'prenom', 'login', 'email', 'photo'];
  utilisateurs: any = [];
  ok = false;
  usersdataSource = this.utilisateurs;
  constructor(private profilservice: ProfilService) {
  }
  dataSource = this.profilservice.getProfils();
  ngOnInit(): void {
    this.profilservice.getProfils().subscribe
    (profil => {
     // console.log(profil);
    });
    }

  // tslint:disable-next-line:typedef
  OnDeleteDeleteProfil(row: any){
    this.profilservice.deleteProfil(row.id).subscribe(
      success => alert('success'),
      error => alert('error')
    );
  }
  // tslint:disable-next-line:typedef
  onListeUsersProfil(id: number){
    this.profilservice.getUsersByProfil(id).subscribe(
      users => {
        this.utilisateurs = users;
        console.log(this.utilisateurs);
        return this.utilisateurs;
      },
      error => alert('error')
    );
  }
  }

