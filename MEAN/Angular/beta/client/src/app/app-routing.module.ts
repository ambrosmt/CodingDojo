import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ShelterHomeComponent } from './shelter-home/shelter-home.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  { path: "new", component: AddPetComponent},
  { path: "", component: ShelterHomeComponent},
  { path: "details/:id", component: PetDetailsComponent },
  { path: "edit/:id", component: EditPetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
