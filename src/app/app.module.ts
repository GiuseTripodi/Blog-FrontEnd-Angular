import { BrowserModule, Title } from '@angular/platform-browser';

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

import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatMenuModule} from '@angular/material/menu';
import { ArticoloCompletoComponent } from './paginaArticoliComponent/articolo-completo/articolo-completo.component';
import { VistaPrincipaleComponent } from './homeComponent/vista-principale/vista-principale.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';




//informazioni OKTA
import {OKTA_CONFIG,OktaAuthModule,} from '@okta/okta-angular';
import { AutenticationComponent } from './Okta/autentication/autentication.component';
import { CaricaArticoliComponent } from './PrivateComponent/carica-articoli/carica-articoli.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { HomeArticoloVistaComponent } from './paginaArticoliComponent/home-articolo-vista/home-articolo-vista.component';
import { TroncaTestoPipe } from './supportedService/tronca-testo.pipe';


//informazioni okta
const config = {
  clientId:"0oa3msvbu07UBzn0q4x7",
  issuer: 'https://dev-399569.okta.com/oauth2/default',


  redirectUri:"http://localhost:4200/implicit/callback",
  pkce: false,



};







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
    AutenticationComponent,
    CaricaArticoliComponent,
    HomeArticoloVistaComponent,
    ArticoloCompletoComponent,
    TroncaTestoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //CoreModuleMaterialModule
    MatCardModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatMenuModule,
    AppRoutingModule,
    MatButtonModule,
    OktaAuthModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule





  ],
  providers: [ Title,
    {provide : HomeMockupServiceService, useClass: HomeMockupServiceService},
    {provide: OKTA_CONFIG, useValue: config}
  ],
  bootstrap: [AppComponent],
  exports: [TroncaTestoPipe]
})
export class AppModule { }
