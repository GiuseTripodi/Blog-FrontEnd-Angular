import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { homeServiceI } from './servizi/HomeService/homeServiceI';
import { Articolo } from './supportedService/articolo';
import { HomeMockupServiceService } from './servizi/HomeService/home-mockup-service.service';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  public constructor(private titleService: Title) {
    this.titleService.setTitle("MarginalRevolution");
   }
}
