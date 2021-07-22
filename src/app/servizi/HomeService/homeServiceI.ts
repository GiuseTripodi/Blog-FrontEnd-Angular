import { Observable } from 'rxjs';
import {Articolo} from "src/app/supportedService/articolo";

export interface homeServiceI{


  getArticoliPerCategoria(nomeCategoria: String) : Observable<Articolo[]>;

  getCategorie(): Observable<String[]>;

  getArticoliPiuLike(): Observable<Articolo[]>;

  getArticoliPiuRecenti(): Observable<Articolo[]>;

  getArticolo(articoloID : number): Observable<Articolo>;


  addLikeAdArticolo(articoloID: number): void;

  addDislikeAdArticolo(articoloID: number): void;

  addArticolo(art : Articolo);



}//homeServiceI
