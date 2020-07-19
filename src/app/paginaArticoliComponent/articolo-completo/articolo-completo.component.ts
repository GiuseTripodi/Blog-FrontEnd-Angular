import { Component, OnInit } from '@angular/core';
import { Articolo } from 'src/app/supportedService/articolo';
import { ActivatedRoute } from '@angular/router';
import { HomeMockupServiceService } from 'src/app/servizi/HomeService/home-mockup-service.service';
import { homeServiceI } from 'src/app/servizi/HomeService/homeServiceI';

@Component({
  templateUrl: './articolo-completo.component.html',
  styleUrls: ['./articolo-completo.component.css']
})
export class ArticoloCompletoComponent implements OnInit {

  //articolo da mostrare
  articolo : Articolo;

  //passare un homeServiceMockup Altrimenti non funziona, ricordarsi di cambiarlo con quello http
  constructor(private route: ActivatedRoute, private servizioArticoli: HomeMockupServiceService ){

   }

  ngOnInit(): void {
    const articoloID = this.route.params.subscribe(params => this.servizioArticoli.getArticolo(params["id"]).subscribe(art => this.articolo = art));

  }

}
