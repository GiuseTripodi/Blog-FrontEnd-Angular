import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticoloCompletoComponent } from './paginaArticoliComponent/articolo-completo/articolo-completo.component';
import { RaccoltaArticoliComponentComponent } from './homeComponent/raccolta-articoli-component/raccolta-articoli-component.component';
import { AppComponent } from './app.component';
import { ArticoliPrincipaliComponentComponent } from './homeComponent/articoli-principali-component/articoli-principali-component.component';
import { VistaPrincipaleComponent } from './homeComponent/vista-principale/vista-principale.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { CaricaArticoliComponent } from './PrivateComponent/carica-articoli/carica-articoli.component';
import { HomeArticoloVistaComponent } from './paginaArticoliComponent/home-articolo-vista/home-articolo-vista.component';


const CALLBACK_PATH = "implicit/callback";

const routes: Routes = [
  {
    path : "",
    component : VistaPrincipaleComponent
  },

  {
    path : "articolo/:id",
    component: HomeArticoloVistaComponent
  },
  //inserisco il path della zona private in cui inserisco gli articoli
  //richiedo l'autenticazione solo per questa zona
  {
    path: CALLBACK_PATH,
    component: OktaCallbackComponent,
  },
  {
    path: "caricaArticoli",
    component: CaricaArticoliComponent,
    canActivate: [OktaAuthGuard],

  },




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
