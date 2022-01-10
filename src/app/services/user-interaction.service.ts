import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {
  private revealAddCar: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  toggleAddCar(): void {
    this.revealAddCar = !this.revealAddCar;
    this.subject.next(this.revealAddCar);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
