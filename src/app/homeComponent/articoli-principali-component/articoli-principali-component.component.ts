import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articolo } from 'src/app/supportedService/articolo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articoli-principali-component',
  templateUrl: './articoli-principali-component.component.html',
  styleUrls: ['./articoli-principali-component.component.css']
})
export class ArticoliPrincipaliComponentComponent implements OnInit {

  @Input() articoliPrincipali : Articolo[];
  //true == ordinati per data, false = ordinati per like
  @Output() metodoVisualizzazione = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  select(ordinamento : boolean): void{
    this.metodoVisualizzazione.emit(ordinamento);
    console.log("Trasmesso tipo di ordinamento");
  }

  selezionatoArticolo(art : Articolo){
    //navigo in base all'array scelto
    //this.router.navigateByUrl("/articolo/${art.id}");
    this.router.navigate(["articolo", art.id]);
    console.log('after navigate: ' + art.id);
  }

}
