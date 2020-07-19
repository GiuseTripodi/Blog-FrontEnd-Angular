import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticoloCompletoComponent } from './paginaArticoliComponent/articolo-completo/articolo-completo.component';
import { RaccoltaArticoliComponentComponent } from './homeComponent/raccolta-articoli-component/raccolta-articoli-component.component';
import { AppComponent } from './app.component';
import { ArticoliPrincipaliComponentComponent } from './homeComponent/articoli-principali-component/articoli-principali-component.component';
import { VistaPrincipaleComponent } from './homeComponent/vista-principale/vista-principale.component';


const routes: Routes = [
  {
    path : "",
    component : VistaPrincipaleComponent
  },

  {
    path : "articolo/:id",
    component: ArticoloCompletoComponent
  }



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
