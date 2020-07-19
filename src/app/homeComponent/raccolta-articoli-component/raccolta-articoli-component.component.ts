import { Component, OnInit, Input } from '@angular/core';
import { Articolo } from 'src/app/supportedService/articolo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raccolta-articoli-component',
  templateUrl: './raccolta-articoli-component.component.html',
  styleUrls: ['./raccolta-articoli-component.component.css']
})
export class RaccoltaArticoliComponentComponent implements OnInit {

  @Input() articoli: Articolo[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selezionatoArticolo(art : Articolo){
    //navigo in base all'array scelto
    //this.router.navigateByUrl("/articolo/${art.id}");
    this.router.navigate(["articolo", art.id]);
    console.log('after navigate: ' + art.id);
  }

}
