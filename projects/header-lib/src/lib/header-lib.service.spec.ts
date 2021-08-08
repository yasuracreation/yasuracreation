import { TestBed } from '@angular/core/testing';

import { HeaderLibService } from './header-lib.service';

describe('HeaderLibService', () => {
  let service: HeaderLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
