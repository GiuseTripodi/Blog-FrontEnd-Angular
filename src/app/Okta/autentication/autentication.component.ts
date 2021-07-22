import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: "app-autentication-component",
  templateUrl: './autentication.component.html',
  styleUrls: ["./autentication.component.css"]

})
export class AutenticationComponent implements OnInit {

  //indica se l'amministratore è autnticato o meno
  isAutenticatedAmm: boolean;

  //indica se il client corrente è autenticato
  isAutenticatedCli : boolean;

  constructor(public oktaAuth: OktaAuthService) {
    //sottoscrivo il valore is autenticated
    this.oktaAuth.$authenticationState.subscribe(
      (isAutenticated: boolean) => this.isAutenticatedAmm = isAutenticated);

    this.oktaAuth.$authenticationState.subscribe(
        (isAutenticated: boolean) => this.isAutenticatedCli = isAutenticated);

  }

  async ngOnInit() {
    this.isAutenticatedAmm = await this.oktaAuth.isAuthenticated();
    this.isAutenticatedCli = await this.oktaAuth.isAuthenticated();


  }

  loginAmministratore(){
    this.oktaAuth.loginRedirect("caricaArticoli");
  }

  logout(){
    this.oktaAuth.logout();
  }

  loginCliente(){
    this.oktaAuth.loginRedirect("");

  }

}
