import {Articolo} from "./articolo"
import { from } from 'rxjs';

export class Categoria {

  id: number;
  nome: string;

  articoli: Articolo[];

  constructor(id: number, nome: string, articoli: Articolo[]){
    this.id = id;
    this.nome = nome;
    this.articoli = articoli;
  }


  public getArticoli(): Articolo[]{
    return this.articoli;
  }

  public getID(): number{
    return this.id;
  }

  public setArticoli(articoli : Articolo[]){
    this.articoli = articoli;
  }


}//categoria





