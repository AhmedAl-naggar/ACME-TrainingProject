import { TestBed } from '@angular/core/testing';

import { PoductDetailGuard } from './poduct-detail.guard';

describe('PoductDetailGuard', () => {
  let guard: PoductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PoductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
