import { Component, OnInit } from '@angular/core';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  title: string = "Car Bazaar";
  //By default 'revelAddCar' is false i.e not revealed
  revealAddCar: boolean = false;
  subscription!: Subscription;

  constructor(
    private userInterfaceService: UserInteractionService,
    private router: Router
    ) {
    this.subscription = this.userInterfaceService.
    onToggle()// returns an observable of the subject whose 'reveal..' has recently been altered by the toggle event
    .subscribe( // value = Observable<subject>.revealAddCar property
      (value) => (this.revealAddCar = value)
    )
  }

  ngOnInit(): void {
  }

  toggleAddCar() {
    this.userInterfaceService.toggleAddCar();
  }
// a Router property method used for displaying/not displaying 
// the 'add' button on pages except Homepage
  isOnRoute(route: string) {
    return this.router.url === route;   
  }

}
