import { Component, OnInit } from '@angular/core';
//import { HomeMockupServiceService } from 'src/app/servizi/HomeService/home-mockup-service.service';
import { Articolo } from 'src/app/supportedService/articolo';
import { HomeRESTService } from 'src/app/servizi/HomeService/home-rest.service';

@Component({
  templateUrl: './vista-principale.component.html',
  styleUrls: ['./vista-principale.component.css']
})
export class VistaPrincipaleComponent implements OnInit {

  //sono gli articoli selezionati in base alla categoria
  articoli : Articolo[];

  categorie : String[];

  //categoria selezionata
  selected : String;

  //gestione articoli principali
  articoliPrincipali : Articolo[];

  //di defoult imposto una visualizzazione per data
  ordinamentoPrincipali : boolean = true;


  //constructor(private servizioHome: HomeMockupServiceService){
  constructor(private servizioHome: HomeRESTService){
    //imposto un valore di defoult alla categoria presa
  }

  ngOnChange(){
    this.selected = this.categorie[0];

    this.getArticoliPerCategoria(this.selected);
  }


  ngOnInit(): void{
    this.getCategorie();
    this.getArticoliPrincipali(this.ordinamentoPrincipali);
    this.getArticoliPerCategoriaDefoult();






  }

  getCategorie(): void {
    this.servizioHome.getCategorie().subscribe(categories => this.categorie = categories);
  }

  getArticoliPerCategoriaDefoult(){
    //valore di defoult per categoria
    this.servizioHome.getArticoliPerCategoria("musica").subscribe(articolis => this.articoli = articolis);

  }

  getArticoliPerCategoria(selected: String){
    console.log(selected);
    this.servizioHome.getArticoliPerCategoria(selected).subscribe(articolis => this.articoli = articolis);
  }

  getArticoliPrincipali(ordinamento : boolean): void{
    //true == ordinati per data, false = ordinati per like
    if(ordinamento){
      this.servizioHome.getArticoliPiuRecenti().subscribe(arts => this.articoliPrincipali = arts);

    }
    else{
      this.servizioHome.getArticoliPiuLike().subscribe(arts => this.articoliPrincipali = arts);
    }
  }

  select(cat: String){
    this.selected =cat;
    //this.articoli = this.selected.articoli;
    this.getArticoliPerCategoria(cat);


    console.log(cat);

  }

  selectTipoVisualizzazione(vis : boolean){
    this.ordinamentoPrincipali = vis;
    this.getArticoliPrincipali(vis);
    console.log("scelto ordinamento :" + vis);
  }


}
