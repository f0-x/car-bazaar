import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/car';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input()
  car!: Car;
  @Output()
  onDeleteCar: EventEmitter<Car> = new EventEmitter() 
  @Output()
  onToggleStatus: EventEmitter<Car> = new EventEmitter()

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(car: Car){
    this.onDeleteCar.emit(car);
  }
  
  onToggle(car: Car){
    this.onToggleStatus.emit(car);
  }
}
