import { TestBed } from '@angular/core/testing';

import { UserRegisterService } from './user-register.service';

describe('UserRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRegisterService = TestBed.get(UserRegisterService);
    expect(service).toBeTruthy();
  });
});
