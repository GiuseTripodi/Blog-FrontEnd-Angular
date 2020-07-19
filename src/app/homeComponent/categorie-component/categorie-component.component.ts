import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Categoria } from 'src/app/supportedService/categoria';

@Component({
  selector: 'app-categorie-component',
  templateUrl: './categorie-component.component.html',
  styleUrls: ['./categorie-component.component.css']
})
export class CategorieComponentComponent implements OnInit {

  @Input() categorie: Categoria[];
  @Output() selectedCategoria = new EventEmitter<Categoria>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCategoria(cat: Categoria){
    this.selectedCategoria.emit(cat);
    console.log("trasmesso ad un livello ancora superiore");
  }

}
