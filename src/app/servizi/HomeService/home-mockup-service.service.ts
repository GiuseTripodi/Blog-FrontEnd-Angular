import { Injectable } from '@angular/core';
import { homeServiceI } from './homeServiceI';
import { Articolo } from 'src/app/supportedService/articolo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeMockupServiceService implements homeServiceI{

  articoli: Articolo[];

  categorie: String[];

  constructor() {
    //inizializzo le due strutture
    this.categorie = ["Economia","Categoria 1","Categoria 2"
    ];


    this.articoli = [
      {id:0, title: "Titoolo 1",text: "testo 1",
        time: new Date(2020, 30, 3), author: "luca",
        numLike: 9, numDislike: 0,

        musica: 0,
        filosofia: 0,
        politica: 0,
        scienza: 0,
        storia: 0,
        giochi: 0,
        libri:0,
        cibo: 1,
        internet:0,
        economia: 0,
        medicina:0,
        scuola: 0,
        legge: 0,
        datasource: 0
      },

      {id:1, title: "Titoolo 2",text: "testo 2",
        time: new Date(2020, 15, 3), author: "mimmo",
        numLike: 99, numDislike: 100,

        musica: 1,
        filosofia: 0,
        politica: 0,
        scienza: 0,
        storia: 0,
        giochi: 0,
        libri:0,
        cibo: 0,
        internet:0,
        economia: 0,
        medicina:0,
        scuola: 0,
        legge: 0,
        datasource: 0
      },
      {id:2, title: "Titoolo 3",text: "testo 3",
        time: new Date(2020, 8, 3), author: "carla",
        numLike: 19, numDislike: 10,

        musica: 0,
        filosofia: 1,
        politica: 0,
        scienza: 0,
        storia: 0,
        giochi: 0,
        libri:0,
        cibo: 0,
        internet:0,
        economia: 0,
        medicina:0,

        scuola: 0,
        legge: 0,
        datasource: 0
      },

    ];






  }//constructor

  getArticoliPerCategoria(nomeCategoria: String): Observable<Articolo[]> {
    return of(this.articoli);
  }
  getCategorie(): Observable<String[]> {
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

  //funzioni per aggiungere like
  addLikeAdArticolo(articoloID : number): void{
    this.articoli.find(art => art.id == articoloID).numLike++;

  }

  removeLikeAdArticolo(articoloID : number): void{
    this.articoli.find(art => art.id == articoloID).numLike--;

  }

  //funzione per trattare con i dislike
  addDislikeAdArticolo(articoloID : number){
    this.articoli.find(art => art.id == articoloID).numDislike--;
  }
  removeDislikeAdArticolo(articoloID : number){
    this.articoli.find(art => art.id == articoloID ).numDislike--;
  }

  addArticolo(art : Articolo) : Observable<any>{
    this.articoli.push(art);
    return of(this.articoli);
  }





}//HomeMockupServiceService
