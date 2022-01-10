import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path: '', component: CarComponent},
  {path: 'about', component: AboutComponent},
    // Adding a default route
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
