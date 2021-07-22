import { Injectable } from '@angular/core';
import { homeServiceI } from './homeServiceI';
import { Articolo } from 'src/app/supportedService/articolo';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CaricaArticoliComponent } from 'src/app/PrivateComponent/carica-articoli/carica-articoli.component';
import { OktaAuthService } from '@okta/okta-angular';

//opzioni per la post
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeRESTService  implements homeServiceI{




  //Articoli dell'applicazione
  articoli: Articolo[];



  //url di base
  private baseURL = "http://localhost:8080";

  constructor(private http: HttpClient, public oktaAuth : OktaAuthService) {
    this.getArticoli().subscribe(art => this.articoli = art);
  }


  getArticoliPerCategoria(nomeCategoria: String): Observable<Articolo[]> {
    //url
    const url = `${this.baseURL}/categoria/${nomeCategoria}`;
  //  console.log(url);

    //faccio la richiesta
    return this.http.get<Articolo[]>(url).pipe(
      catchError(this.handleError("getCategorie", []))
    );

  }
  //restituisce tutte le categorie
  getCategorie(): Observable<String[]> {
    //creo l'url
    const url = `${this.baseURL}/categorie`;
//    console.log(url);
    //faccio la richiesta
    return this.http.get<String[]>(url).pipe(
      tap(),
      catchError(this.handleError("getCategorie", []))
    );
  }

  //restituisce tutti gli articoli
  getArticoli() : Observable<Articolo[]>{
    //creo l'url
    const url = `${this.baseURL}/articoli`;
    //faccio la richiesta
    return this.http.get<Articolo[]>(url).pipe(
      tap(articoli => this.articoli = articoli),
      catchError(this.handleError("getArticoli", []))
    );

  }
  getArticoliPiuLike(): Observable<Articolo[]> {
    //url
    const url = `${this.baseURL}/articoloPerLike`;
    //faccio la richiesta
    return this.http.get<Articolo[]>(url);
  }

  getArticoliPiuRecenti(): Observable<Articolo[]> {
    //url
    const url = `${this.baseURL}/articoloPerData`;
    //faccio la richiesta
    return this.http.get<Articolo[]>(url);
  }


  getArticolo(articoloID: number): Observable<Articolo> {
    //url
    //const url = `${this.baseURL}/articolo/${articoloID}`;
    let url = this.baseURL + "/articolo/" + articoloID;
    console.log(url)
    //faccio la richiesta
    return this.http.get<Articolo>(url)

    //return of(this.articoli.find(art => art.id == articoloID ));
}

/**
 * Metodo usato per modificare un articolo già caricato, si usa nell'arera riservata
 * @param art
 * @param cat
 */
  async updateArticolo(art : Articolo) : Promise<Observable<Articolo>>{

  const accessToken = await this.oktaAuth.getAccessToken();
  const headers =  {Authorization: 'Bearer ' + accessToken,  'Content-Type': 'application/json' }


  const createArticolo  = new Articolo();
  const url = `${this.baseURL}/update_articolo/ ` + art.id;
  console.log(createArticolo);


return this.http.put<Articolo>(url,createArticolo ,{headers});



}



async addArticolo(art: Articolo): Promise<void> {
  const accessToken = await this.oktaAuth.getAccessToken();

  console.log(art);

  const url = `${this.baseURL}/create_articolo`;

  const headers =  {Authorization: 'Bearer ' + accessToken,  'Content-Type': 'application/json' }

  this.http.post(url, art, {headers}).subscribe(r => {});


}

/**
 * Il metodo mi consente di aggiungere un like ad un articolo
 * @param articoloID
 * @returns
 */
async addLikeAdArticolo(articoloID: number): Promise<Observable<Articolo>>{
  const accessToken = await this.oktaAuth.getAccessToken();

  let url = this.baseURL + "/addLike/" + articoloID;
  const headers =  {Authorization: 'Bearer ' + accessToken,  'Content-Type': 'application/json' }

    console.log(accessToken)
    //faccio la richiesta
    return this.http.get<Articolo>(url,{headers})

}




/**
 * Il metodo mi consente di aggiungere un dislike  ad un articolo
 * @param articoloID
 * @returns
 */
 async addDislikeAdArticolo(articoloID: number): Promise<Observable<Articolo>> {
  const accessToken = await this.oktaAuth.getAccessToken();
  const url = `${this.baseURL}/addDislike/` + articoloID;
  const headers =  {Authorization: 'Bearer ' + accessToken,  'Content-Type': 'application/json' }
  console.log(url)
  return this.http.get<Articolo>(url ,{headers});


}

private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };



  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }











}
