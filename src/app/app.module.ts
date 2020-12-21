import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ProfilComponent} from './profil/profil.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {AuthComponent} from './auth/auth.component';
import {MaterialModule} from './material/material.module';
import { FooterComponent } from './shared/footer/footer.component';
import {JwtInterceptorService} from './helper/jwt-interceptor.service';
import { ProfilAddComponent } from './profil-add/profil-add.component';
import {MatRadioButton, MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    UtilisateurComponent,
    AuthComponent,
    FooterComponent,
    ProfilAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
  ],
  entryComponents: [
    ProfilComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
