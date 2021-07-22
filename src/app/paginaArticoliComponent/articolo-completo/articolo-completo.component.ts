import { Component, OnInit, Inject, Input } from '@angular/core';
import { Articolo } from 'src/app/supportedService/articolo';
import { ActivatedRoute } from '@angular/router';
//import { HomeMockupServiceService } from 'src/app/servizi/HomeService/home-mockup-service.service';
import { HomeRESTService } from 'src/app/servizi/HomeService/home-rest.service';






@Component({
  selector: "articolo-completo-component",
  templateUrl: './articolo-completo.component.html',
  styleUrls: ['./articolo-completo.component.css']
})
export class ArticoloCompletoComponent {

  //articolo da mostrare
  @Input() article : Articolo;



  //passare un homeServiceMockup Altrimenti non funziona, ricordarsi di cambiarlo con quello http
  //constructor(private route: ActivatedRoute, private servizioArticoli: HomeMockupServiceService ){
  constructor(private articoloService : HomeRESTService){

  }

/**
 *Aggiungere la funzionalità che permette di inserire like e dislike agli articolo
 *  */

//metodo per aggiungere il like
 async like() :Promise<void> {
  (await this.articoloService.addLikeAdArticolo(this.article.id)).subscribe(article => this.article = article)

 }

 //metodo per aggiungereil dislike
 async dislike() : Promise<void>{
  (await this.articoloService.addDislikeAdArticolo(this.article.id)).subscribe(article => this.article = article)


 }

}
