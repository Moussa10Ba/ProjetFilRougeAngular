import { Component, OnInit } from '@angular/core';
import {UserService} from '../Service/user.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Utilisateur} from '../Model/Utilisateur';
import {FormControl, FormGroup} from '@angular/forms';
import {ProfilService} from '../Service/profil.service';
import {Profils} from '../Model/Profils';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  constructor(private userService: UserService, private profilService: ProfilService) {}
  addUSerForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    genre: new FormControl('1'),
    login: new FormControl('1'),
    photo: new FormControl('1'),
    role: new FormControl('1'),
  });
  utilisateursTab: Utilisateur[] = [];
  profils: any = [];
  displayedColumns = ['id', 'nom', 'prenom', 'login', 'email', 'photo', 'edit', 'delete'];
  dataSource = this.userService.getUsers();
  ngOnInit(): void {
     this.userService.getUsers().subscribe(
       utilisateurs => {
       },
     );
     this.profilService.getProfils().subscribe(
        profil => {
          this.profils = profil;
        },
     );
   }

  // tslint:disable-next-line:typedef
  OnDeleteUser(row: any){
  this.userService.deleteUser(row.id).subscribe(
    success => alert('OK'),
    error => alert('Error')
  );

  }

}
