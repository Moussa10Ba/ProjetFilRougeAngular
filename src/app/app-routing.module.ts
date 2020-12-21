import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilComponent} from './profil/profil.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {AuthComponent} from './auth/auth.component';
import {AppComponent} from './app.component';
import {ProfilAddComponent} from './profil-add/profil-add.component';

const routes: Routes = [
  {path: 'profils', component: ProfilComponent},
  {path: 'utilisateurs', component: UtilisateurComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'index', component: ProfilComponent},
  {path: 'profilsAdd', component: ProfilAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
