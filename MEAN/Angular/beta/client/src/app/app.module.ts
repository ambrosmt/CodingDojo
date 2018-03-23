import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PetshelterService } from './petshelter.service';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ShelterHomeComponent } from './shelter-home/shelter-home.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    ShelterHomeComponent,
    PetDetailsComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PetshelterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
