import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CarService } from './car.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Car } from '../car'


describe('CarService', () => {
  let carService: CarService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
/*
Suppose CarService was dependent on another service(eg. UiService.ts) 
  let uiServiceSpy: jasmine.SpyObj<uiService>;
*/
  let testUrl: string = 'http://localhost:5000';

// Execute this 'beforeEach' test cases
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CarService]
    });
    carService = TestBed.inject(CarService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(CarService).toBeTruthy();
  });

  it('should call getCars and return and array of Cars', () => {

    const testData: Car []= [{
      id: 0,
      brand: 'test brand',
      model: 'test model',
      price: 0,
      status:false 
    }]

  carService.getCars().subscribe(
    (res) => {
      expect(res).toEqual(testData);
    }
  )

  const req = httpTestingController.expectOne(`${testUrl}/cars`)
  expect(req.request.method).toEqual('GET');

  req.flush(testData);

  
  });  

  it('should call deleteCar and return the Car deleted from the API', () => {
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

  it('should call toggleStatus and return the Car whose status has been toggled', () => {
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

  it('should call formSubmit and return the Car which has been submitted via form', () => {
    const sampleFormData: Car = {
      id: 0,
      brand: 'test brand',
      model: 'test model',
      price: 0,
      status: false
    }

    carService.formSubmit(sampleFormData).subscribe(
      (res) => {
        expect(res).toEqual(sampleFormData)
      }
    )

    const req = httpTestingController.expectOne(`${testUrl}/cars`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(sampleFormData);

    req.flush(sampleFormData);
  })

  it('should test for 404 error', () => {
    const errorMsg = 'deliberate 404 error';
// forcefull failing a testcase to observe how it's handled
    httpClient.get<Car[]>(testUrl).subscribe(
      res => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(errorMsg, 'message');
      }
    );

      const req = httpTestingController.expectOne(testUrl);

      req.flush(errorMsg, {
        status: 404,
        statusText: 'Not Found'
      });
  })


  afterEach(() => {
  // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

})
