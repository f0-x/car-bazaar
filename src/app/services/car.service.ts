import { Injectable } from '@angular/core';
import { Car } from '../car';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CarService {
  readonly apiUrl = "http://localhost:5000/cars"

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.apiUrl);
  }

  deleteCar(car: Car): Observable<Car>{
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.delete<Car>(url);
  }

  toggleStatus(car: Car): Observable<Car>{
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.put<Car>(url, car, httpOptions);
  }

  formSubmit(car: Car): Observable<Car>{
    return this.http.post<Car>(this.apiUrl, car, httpOptions);
  }
}
