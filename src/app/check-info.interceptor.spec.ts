import { TestBed } from '@angular/core/testing';

import { CheckInfoInterceptor } from './check-info.interceptor';

describe('CheckInfoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CheckInfoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CheckInfoInterceptor = TestBed.inject(CheckInfoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
