import { TestBed } from '@angular/core/testing';

import { CameraService } from './camara.service';

describe('CamaraService', () => {
  let service: CameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
