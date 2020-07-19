import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitoloComponentComponent } from './homeComponent/titolo-component/titolo-component.component';
import { CategorieComponentComponent } from './homeComponent/categorie-component/categorie-component.component';
import { ArticoliPrincipaliComponentComponent } from './homeComponent/articoli-principali-component/articoli-principali-component.component';
import { RaccoltaArticoliComponentComponent } from './homeComponent/raccolta-articoli-component/raccolta-articoli-component.component';
import { HomeMockupServiceService } from './servizi/HomeService/home-mockup-service.service';
import { CategoriaItemComponent } from './homeComponent/Item/categoria-item/categoria-item.component';
import { ArticoloItemComponent } from './homeComponent/Item/articolo-item/articolo-item.component';

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatMenuModule} from '@angular/material/menu';
import { ArticoloCompletoComponent } from './paginaArticoliComponent/articolo-completo/articolo-completo.component';
import { VistaPrincipaleComponent } from './homeComponent/vista-principale/vista-principale.component';






@NgModule({
  declarations: [
    AppComponent,
    TitoloComponentComponent,
    CategorieComponentComponent,
    ArticoliPrincipaliComponentComponent,
    RaccoltaArticoliComponentComponent,
    CategoriaItemComponent,
    ArticoloItemComponent,
    ArticoloCompletoComponent,
    VistaPrincipaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //CoreModuleMaterialModule
    MatCardModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [
    {provide : HomeMockupServiceService, useClass: HomeMockupServiceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
