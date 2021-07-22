import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categoria-item',
  templateUrl: './categoria-item.component.html',
  styleUrls: ['./categoria-item.component.css']
})
export class CategoriaItemComponent implements OnInit {

  @Input() categoria : String;
  @Output() selected = new EventEmitter<String>();


  constructor() { }

  ngOnInit(): void {
  }

  select() : void{
    this.selected.emit(this.categoria);
    console.log("Trasmessa categoria");

  }

}
