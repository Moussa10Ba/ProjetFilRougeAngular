import { Component } from '@angular/core';
import {AuthenticationService} from './Service/authservice';
import {Utilisateur} from './Model/Utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetFilRougeAngular';
  isConnected = false;
  private user: any;
  constructor(private auth: AuthenticationService) {
    this.auth.currentUser.subscribe(
      (user: Utilisateur) => {
        if (user.token === undefined){
          this.isConnected = false;
        }else{
          this.isConnected = true;
        }
      }
    );
  }
  opened = false;
  ngOnInit(): void {
  }

  //user = this.auth.currentUserValue;
// tslint:disable-next-line:typedef
  logOut(){
    this.auth.logout();
    this.isConnected=false;
  }
}
