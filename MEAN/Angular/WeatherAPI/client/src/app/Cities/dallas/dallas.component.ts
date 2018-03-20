import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  data: any;
  state: string;
  constructor(private _CityWeather: WeatherService) { }

  ngOnInit() {
    var url = location.toString();
    //remove "https:localhost:4200" from url string
    var routeId = url.slice(22);
    console.log("I am at Id " + routeId);
    var weatherObservable = this._CityWeather
      .getData(routeId)
      .subscribe(res => {
        console.log("\n this is the subscribed Data");
        console.log(res);
        this.data = res;
        this.state = ", CA"
        console.log("This city is in" + this.state)
      });
  }
}