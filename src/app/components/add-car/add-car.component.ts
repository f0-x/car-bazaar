import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Car } from 'src/app/car';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})

export class AddCarComponent implements OnInit {
  @Output()
  onFormSubmit: EventEmitter<Car> = new EventEmitter();
  brand!: string;
  model!: string;
  price!: number;
  status: boolean = false;

  revealForm: boolean = false;
  subscription!: Subscription;

  constructor(private userInteractionService: UserInteractionService) {
    this.subscription = this.userInteractionService.
    onToggle()
    .subscribe(
      (value) => this.revealForm = value
    )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.brand){
      alert("Please add a brand name!");
      return;
    }
    const newCar= {
      brand: this.brand,
      model: this.model,
      price: this.price,
      status: this.status
    }

    this.onFormSubmit.emit(newCar);

    this.brand = ""
    this.model = ""
    this.price = 0
    this.status = false

  }

}
