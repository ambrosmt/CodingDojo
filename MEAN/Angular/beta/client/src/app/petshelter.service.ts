import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PetshelterService {

  constructor(private _Shelter: HttpClient) { }
  getData(route){
    return this._Shelter.get(route);
  }
  deletePet(id){
    let route = 'http://localhost:8000/pet/delete/'+ id;
    return this._Shelter.delete(route);
  }
  updatePet(id, res){
    let route = "http://localhost:8000/pet/" + id;
    return this._Shelter.put(route, res);
  }
}
