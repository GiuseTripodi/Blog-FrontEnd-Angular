import { Injectable } from '@angular/core';
import { homeServiceI } from './homeServiceI';
import { Articolo } from 'src/app/supportedService/articolo';
import { Categoria } from 'src/app/supportedService/categoria';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeMockupServiceService implements homeServiceI{

  articoli: Articolo[];

  categorie: Categoria[];

  constructor() {
    //inizializzo le due strutture
    this.categorie = [
      new Categoria(0,"Categoria 1",  this.articoli),
      new Categoria(1,"Categoria 2",this.articoli),
      new Categoria(3, "Categoria 3", this.articoli)
    ];


    this.articoli = [
      {id:0, titolo: "Titoolo 1",testo: "testo 1",
        date: new Date(2020, 30, 3), autore: "luca",
        numeroLike: 9, numeroDislike: 0,

        categoria: this.categorie[0]
      },
      {id:1, titolo: "Titoolo 2",testo: "testo 2",
        date: new Date(2020, 21, 6), autore: "Marco",
        numeroLike: 3, numeroDislike: 34,

        categoria: this.categorie[1]
      },
      {id:2, titolo: "Titoolo 3",testo: "testo 3",
        date: new Date(2011, 21, 9), autore: "Marco",
        numeroLike: 2, numeroDislike: 41,

        categoria: this.categorie[1]
      }

    ];

    this.categorie[0].setArticoli(this.articoli);
    this.categorie[1].setArticoli(this.articoli);
    this.categorie[2].setArticoli(this.articoli);






  }//constructor

  getArticoliPerCategoria(idCategoria: number): Observable<Articolo[]> {
    return of(this.categorie[idCategoria].getArticoli());
  }
  getCategorie(): Observable<Categoria[]> {
    return of(this.categorie);
  }
  getArticoliPiuLike(): Observable<Articolo[]> {
    return of(this.articoli);
  }
  getArticoliPiuRecenti(): Observable<Articolo[]> {
    return of(this.articoli);
  }


  //Restituisce un articolo dato un ID
  getArticolo(articoloID : number): Observable<Articolo>{
    console.log('Artid:'+articoloID+'articolo'+this.articoli.find(art => art.id == articoloID));
    return of(this.articoli.find(art => art.id == articoloID ));

  }





}//HomeMockupServiceService
