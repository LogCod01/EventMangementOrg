import { TestBed } from '@angular/core/testing';

import { AuthenticguardService } from './authenticguard.service';

describe('AuthenticguardService', () => {
  let service: AuthenticguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
