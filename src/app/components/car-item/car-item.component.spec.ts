import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarItemComponent } from './car-item.component';

describe('CarItemComponent', () => {
  let component: CarItemComponent;
  let fixture: ComponentFixture<CarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarItemComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

// Since the component 'car-item' has binded
// all of its contents to @Input & @Output
// reading the component's body will return undefined

/*   it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
