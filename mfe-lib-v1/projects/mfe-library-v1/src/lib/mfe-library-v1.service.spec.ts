import { TestBed } from '@angular/core/testing';

import { MfeLibraryV1Service } from './mfe-library-v1.service';

describe('MfeLibraryV1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MfeLibraryV1Service = TestBed.get(MfeLibraryV1Service);
    expect(service).toBeTruthy();
  });
});
