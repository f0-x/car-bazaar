import { TestBed } from '@angular/core/testing';

import { UserInteractionService } from './user-interaction.service';
import {Car} from '../car'

describe('UserInteractionService', () => {
  let service: UserInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
