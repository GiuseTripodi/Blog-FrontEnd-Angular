import { Observable } from 'rxjs';
import { Categoria } from 'src/app/supportedService/categoria';
import {Articolo} from "src/app/supportedService/articolo";

export interface homeServiceI{


  getArticoliPerCategoria(idCategoria: number) : Observable<Articolo[]>;

  getCategorie(): Observable<Categoria[]>;

  getArticoliPiuLike(): Observable<Articolo[]>;

  getArticoliPiuRecenti(): Observable<Articolo[]>;

  getArticolo(articoloID : number): Observable<Articolo>;


}//homeServiceI
