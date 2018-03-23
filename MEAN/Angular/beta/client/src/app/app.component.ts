import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { PetshelterService } from './petshelter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // allpets: any;
  constructor(private _Shelter: PetshelterService) {}

  ngOnInit() {
    // var url = location.toString();
    // var route = url + "pets"
    // console.log('I have Init the app component')
    // var shleterObservable = this._Shelter
    //   .getAll(route)
    //   .subscribe(data =>{
    //     console.log("\n this is the subscribed Data");
    //     console.log(data);
    //     this.allpets = data;
    //  })
  }
}
