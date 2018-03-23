import { Component, OnInit } from '@angular/core';
import { PetshelterService } from '../petshelter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  data: any;
  constructor(private _PetDetails: PetshelterService, private router : Router) { }

  ngOnInit() {
    var url = location.toString();
    var petId = url.slice(30);
    let route = url.slice(0,22) + "pet/" + petId;
    console.log(route)
    var petObservable = this._PetDetails
      .getData(route)
      .subscribe(res =>{
        console.log("\n this is the subscribed Data");
        console.log(res);
        this.data = res;
      })
  }
  deletePet(id){
    console.log(id);
    this._PetDetails.deletePet(id).subscribe(res =>{
      console.log("pet deleted")
    });
    this.router.navigate([''])
  }
}
