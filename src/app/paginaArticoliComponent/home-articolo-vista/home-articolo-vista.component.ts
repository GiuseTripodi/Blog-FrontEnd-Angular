import { Component, OnInit } from '@angular/core';
import { Articolo } from 'src/app/supportedService/articolo';
import { ActivatedRoute } from '@angular/router';
import { HomeRESTService } from 'src/app/servizi/HomeService/home-rest.service';

@Component({
  templateUrl: './home-articolo-vista.component.html',
  styleUrls: ['./home-articolo-vista.component.css']
})
export class HomeArticoloVistaComponent implements OnInit {

  article:Articolo;

  constructor(private route: ActivatedRoute, private servizioArticoli: HomeRESTService ) {


  }

  ngOnInit(): void {
    const articoloID = this.route.params.subscribe(params => this.servizioArticoli.getArticolo(params["id"]).subscribe(art =>  (this.article= Articolo.create(art))));




  }

}
