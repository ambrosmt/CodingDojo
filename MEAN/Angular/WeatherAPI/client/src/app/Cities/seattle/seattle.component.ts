import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  data : any;
  state : string;
  stateArr = [", WA", ", CA", ", LI", ", TX"];
  img : any;
  constructor(private _CityWeather : WeatherService) { }

  ngOnInit() {
    var url = location.toString();
    //remove "https:localhost:4200" from url string
    var routeId = url.slice(22);
    console.log("I am at Id "+routeId);
    var weatherObservable = this._CityWeather
      .getData(routeId)
        //console.log("weather json Data =" + JSON.stringify(res))
      .subscribe(res => {
        console.log("\n this is the subscribed Data");
        console.log(res);
        this.data = res;
        this.img = routeId
        if (this.data.name === "Seattle"){
          this.state = this.stateArr[0]
        }
        else if (this.data.name === "San Jose") {
          this.state = this.stateArr[1]
        }
        else if (this.data.name === "Burbank") {
          this.state = this.stateArr[1]
        }
        else if (this.data.name === "Chicago") {
          this.state = this.stateArr[2]
        }
        else if (this.data.name === "Dallas") {
          this.state = this.stateArr[3]
        };
        console.log("This city is in" + this.state)
        // console.log("I should be an object " + this.data + "\n*****************************");
        // console.log("My Humitidy is " + this.data.main.humidity + "\n*****************************");  
      });
  }
}