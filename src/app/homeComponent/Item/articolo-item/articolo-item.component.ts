import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Articolo } from 'src/app/supportedService/articolo';




@Component({
  selector: 'app-articolo-item',
  templateUrl: './articolo-item.component.html',
  styleUrls: ['./articolo-item.component.css']
})
export class ArticoloItemComponent implements OnInit {

  @Input() art: Articolo;

  @Output() articoloSelezionato = new EventEmitter<Articolo>();

  constructor() { }

  ngOnInit(): void {
  }

  selezionatoArticolo() : void{
    this.articoloSelezionato.emit(this.art);
    //window.open("/articolo/0");
    console.log('Articolo selezionato');
  }

}
