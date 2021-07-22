
export class Articolo {

//generali
  id: number;
  time: Date;
  author: string;
  title: string;
  text: string;

//informazioni sui like
  numDislike: number;
  numLike: number;

  //categoria
  musica: number;
  filosofia: number;
  politica: number;
  scienza: number;
  storia: number;
  giochi: number;
  libri: number;
  cibo: number;
  internet: number;
  economia: number;
  medicina: number;
  scuola: number;
  legge: number;
  datasource: number;


  static create(x : Object): Articolo{

    const a = new Articolo();
    Object.keys(x).forEach(key =>{
      a[key] = x[key];
    });
    console.log(a);
    return a;
  }









}
