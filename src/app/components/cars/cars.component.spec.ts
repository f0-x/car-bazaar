import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsComponent } from './cars.component';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
// DOn't forget to import RouterTestingModule at the test file.
import { RouterTestingModule } from '@angular/router/testing';

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
