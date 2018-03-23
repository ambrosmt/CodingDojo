import { Component, OnInit } from '@angular/core';
import { PetshelterService } from '../petshelter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  data: any;
  constructor(private _PetDetails: PetshelterService, private router: Router) { }

  ngOnInit() {
    var url = location.toString();
    var petId = url.slice(27);
    console.log(petId);
    let route = url.slice(0, 22) + "pet/" + petId;
    console.log(route)
    var petObservable = this._PetDetails
      .getData(route)
      .subscribe(res => {
        console.log("\n this is the subscribed Data");
        console.log(res);
        this.data = res;
      })
  }
  updatePet(name, type, description, skillone, skilltwo, skillthr, id){
    var data = [name, type, description, skillone, skilltwo, skillthr, id]
    var res = {}
    this._PetDetails.updatePet(data, res);
    this.router.navigate(['']);
  }
}