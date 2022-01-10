import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { ButtonComponent } from './components/button/button.component';
import { CarComponent } from './components/car/car.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AboutComponent } from './components/about/about.component';
import { BottompageComponent } from './components/bottompage/bottompage.component'

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ButtonComponent,
    CarComponent,
    CarItemComponent,
    AddCarComponent,
    AboutComponent,
    BottompageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
