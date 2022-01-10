import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => this.cars = cars)
  }

  deleteCar(car: Car) {
    this.carService.deleteCar(car).subscribe(
      () => this.cars = this.cars.filter(aCar => aCar.id !== car.id )
    )
  }

  toggleStatus(car: Car) {
    car.status = !car.status;
    this.carService.toggleStatus(car).subscribe();
    // No need to subscribe to the Observable<Car>
    //returned by toggleStatus(car) since the operation is 
    // just to flip the boolean status of the car.
  }

  formSubmit(car: Car) {
    this.carService.formSubmit(car).subscribe(
      (car) => this.cars.push(car)
    )
  }

}
