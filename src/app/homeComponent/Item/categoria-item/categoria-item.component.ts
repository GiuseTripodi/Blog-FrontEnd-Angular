import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/supportedService/categoria';

@Component({
  selector: 'app-categoria-item',
  templateUrl: './categoria-item.component.html',
  styleUrls: ['./categoria-item.component.css']
})
export class CategoriaItemComponent implements OnInit {

  @Input() categoria : Categoria;
  @Output() selected = new EventEmitter<Categoria>();


  constructor() { }

  ngOnInit(): void {
  }

  select() : void{
    this.selected.emit(this.categoria);
    console.log("Trasmessa categoria");

  }

}
