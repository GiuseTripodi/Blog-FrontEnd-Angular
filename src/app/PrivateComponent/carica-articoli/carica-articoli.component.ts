import { Component, OnInit } from '@angular/core';
import { Articolo } from 'src/app/supportedService/articolo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeMockupServiceService } from 'src/app/servizi/HomeService/home-mockup-service.service';
import { Data } from '@angular/router';
import { HomeRESTService } from 'src/app/servizi/HomeService/home-rest.service';

@Component({
  templateUrl: './carica-articoli.component.html',
  styleUrls: ['./carica-articoli.component.css']
})
export class CaricaArticoliComponent implements OnInit {

  //creo la Form
  articoloForm= new FormGroup({
    titoloArticolo: new FormControl(null, [Validators.required]),
    testoArticolo: new FormControl("", [Validators.required]),
    data: new FormControl("", Validators.required),
    autore: new FormControl("", [Validators.required]),

    categoria: new FormControl("", Validators.required)


  });


  //definisco le informazioni da prendermi
  titoloArticolo : string;
  testoArticolo : string;
  dataArticolo : Date;
  autoreArticolo : string;
  nomeCategoria : string;

  value: string;



  //ricordardi di mettere il servizio HTTP
  //constructor(private articoloService : HomeMockupServiceService) { }
  constructor(private articoloService : HomeRESTService) { }

  ngOnInit(): void {
    //prendo le informazioni

    this.articoloForm.get("titoloArticolo").valueChanges.subscribe(val => { this.titoloArticolo = val;});
    this.articoloForm.get("testoArticolo").valueChanges.subscribe(val => { this.testoArticolo= val;});
    this.articoloForm.get("data").valueChanges.subscribe(val => { this.dataArticolo = val;});
    this.articoloForm.get("autore").valueChanges.subscribe(val => { this.autoreArticolo = val;});

    this.articoloForm.get("categoria").valueChanges.subscribe(
    val => { this.nomeCategoria = val;});



  }

  //metodo per caricare l'articolo
  add(): void{
    //carico le infomrmazioni in un articolo
    let a = new Articolo();

    a.title = this.titoloArticolo;
    a.text = this.testoArticolo;
    a.time = this.dataArticolo;
    a.author = this.autoreArticolo;
    //assegno un 1 alla categoria indicata
    if (this.nomeCategoria == "Scuola"){a.scuola=1};
    if (this.nomeCategoria == "Musica") {a.musica=1};
    if (this.nomeCategoria ==  "Filosofia") {a.filosofia=1};
    if (this.nomeCategoria == "Politica") {a.politica=1};
    if (this.nomeCategoria == "Scienza") {a.scienza=1};
    if (this.nomeCategoria == "Storia") {a.storia=1};
    if (this.nomeCategoria == "Legge") {a.legge=1};
    if (this.nomeCategoria == "Giochi") {a.giochi=1};
    if (this.nomeCategoria == "Libri") {a.libri=1};
    if (this.nomeCategoria == "Cibo") {a.cibo=1};
    if (this.nomeCategoria == "Internet") {a.internet=1};
    if (this.nomeCategoria == "Economia") {a.economia=1};
    if (this.nomeCategoria == "Medicina") {a.medicina=1};

    //invoco il metodo di caricamento
    this.articoloService.addArticolo(a);
    console.log(a);
    this.articoloForm.reset();



  }

}
