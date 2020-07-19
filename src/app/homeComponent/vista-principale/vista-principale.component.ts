import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/supportedService/categoria';
import { HomeMockupServiceService } from 'src/app/servizi/HomeService/home-mockup-service.service';
import { Articolo } from 'src/app/supportedService/articolo';

@Component({
  templateUrl: './vista-principale.component.html',
  styleUrls: ['./vista-principale.component.css']
})
export class VistaPrincipaleComponent implements OnInit {

  //sono gli articoli selezionati in base alla categoria
  articoli : Articolo[];

  categorie : Categoria[];

  //categoria selezionata
  selected : Categoria;

  //gestione articoli principali
  articoliPrincipali : Articolo[];

  //di defoult imposto una visualizzazione per data
  ordinamentoPrincipali : boolean = true;


  constructor(private servizioHome: HomeMockupServiceService){
    //imposto un valore di defoult alla categoria presa
    this.getCategorie();
    this.selected = this.categorie[0];

  }

  ngOnChange(): void{
    this.getCategorie();

  }

  ngOnInit(): void{
    console.log("caricato");
    this.getCategorie();
    this.getArticoliPrincipali(this.ordinamentoPrincipali);

    this.getArticoliPerCategoria(this.selected);
    //al memento li faccio restiruire per date


  }

  getCategorie(): void {
    this.servizioHome.getCategorie().subscribe(categories => this.categorie = categories);
  }

  getArticoliPerCategoria(selected: Categoria){
    this.servizioHome.getArticoliPerCategoria(selected.id).subscribe(articolis => this.articoli = articolis);
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

  select(cat: Categoria){
    this.selected =cat;
    this.articoli = this.selected.getArticoli();
    console.log(cat);

  }

  selectTipoVisualizzazione(vis : boolean){
    this.ordinamentoPrincipali = vis;
    console.log("scelto ordinamento :" + vis);
  }


}
