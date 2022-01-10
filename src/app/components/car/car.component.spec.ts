import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CarService } from 'src/app/services/car.service';
import { CarComponent } from './car.component';
import { Car } from 'src/app/car'

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;
  let carService: CarService;
  let httpTestingController: HttpTestingController;
  const testUrl: string = 'http://localhost:5000';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [ CarComponent ],
      providers: [CarComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    expect(component).toBeDefined();
    fixture.detectChanges();
    carService = TestBed.inject(CarService);
    component = TestBed.inject(CarComponent)
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call deleteCar and remove the car object from the collection using the service', () => {
    const testCarData: Car = {
      id: 0,
      brand: 'test brand',
      model: 'test model',
      price: 0,
      status:false 
    }

    carService.deleteCar(testCarData)
    .subscribe(
      (res) => {
        expect(res).toEqual(testCarData);
      }
    );

    const req = httpTestingController.expectOne({
      method: 'DELETE',
      url: `${testUrl}/cars/${testCarData.id}`
    });

    req.flush(testCarData);
  })

  it('should call toggleStatus and toggle the status of the car object using the service method', () => {
    const testData: Car = {
      id: 0,
      brand: 'test brand',
      model: 'test model',
      price: 0,
      status: false
    }

    carService.toggleStatus(testData).subscribe(
      (data) => {
        expect(data).toEqual(testData, 'should return the toggled Car');
      }
    )

    const req = httpTestingController.expectOne(`${testUrl}/cars/${testData.id}`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(testData);

    req.flush(testData)

  })
});
