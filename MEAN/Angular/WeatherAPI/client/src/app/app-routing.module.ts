import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SeattleComponent} from './Cities/seattle/seattle.component'
import { DallasComponent } from './Cities/dallas/dallas.component';

const routes: Routes = [
  { path: "5809844", component: SeattleComponent},
  { path: "4190598", component: DallasComponent },
  { path: "5392171", component: SeattleComponent },
  { path: "5331836", component: SeattleComponent },
  { path: "4140963", component: SeattleComponent },
  { path: "4887398", component: SeattleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
