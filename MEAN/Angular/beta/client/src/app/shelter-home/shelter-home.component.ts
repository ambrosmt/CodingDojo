import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { PetshelterService } from '../petshelter.service';

@Component({
  selector: 'app-shelter-home',
  templateUrl: './shelter-home.component.html',
  styleUrls: ['./shelter-home.component.css']
})
export class ShelterHomeComponent implements OnInit {
  allpets: any;
  constructor(private _Shelter: PetshelterService) { }

  ngOnInit() {
    var url = location.toString();
    var route = url + "pets"
    console.log('I have Init the app component')
    var shleterObservable = this._Shelter
      .getData(route)
      .subscribe(data => {
        console.log("\n this is the subscribed Data");
        console.log(data);
        this.allpets = data;
      })
  }
} 