import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-categorie-component',
  templateUrl: './categorie-component.component.html',
  styleUrls: ['./categorie-component.component.css']
})
export class CategorieComponentComponent implements OnInit {

  @Input() categorie: String[];
  @Output() selectedCategoria = new EventEmitter<String>();


  //indice della categoria selezionata, valore di defoult
  selIndex : String = "musica";

  constructor() {

   }

  ngOnInit(): void {
  }

  selectCategoria(cat: String){
    this.selectedCategoria.emit(cat);
    this.selIndex = cat;
    console.log("trasmesso ad un livello ancora superiore");
  }

}
