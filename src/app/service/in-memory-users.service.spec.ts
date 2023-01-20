import { TestBed } from '@angular/core/testing';

import { InMemoryUsersService } from './in-memory-users.service';

describe('InMemoryUsersService', () => {
  let service: InMemoryUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
