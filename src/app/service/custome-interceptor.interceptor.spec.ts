import { TestBed } from '@angular/core/testing';

import { CustomeInterceptorInterceptor } from './custome-interceptor.interceptor';

describe('CustomeInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomeInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomeInterceptorInterceptor = TestBed.inject(CustomeInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
