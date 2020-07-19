import { Categoria } from './categoria';

export class Articolo {

  id:number;
  titolo: string;
  testo: string;
  date: Date;
  autore: string;
  numeroLike: number;
  numeroDislike: number;

  categoria: Categoria;

  constructor(id:number,titolo: string,testo: string,date: Date,autore: string,numeroLike: number,numeroDislike: number,categoria: Categoria){
    this.id = id;
    this.titolo = titolo;
    this.testo = testo;
    this.date = date;
    this.autore = autore;
    this.numeroDislike = numeroDislike;
    this.numeroLike = numeroLike;
    this.categoria = categoria;

    }


}
