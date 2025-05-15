import { TestBed } from '@angular/core/testing';

import { BaseDatosAirtableService } from './base-datos-airtable.service';

describe('BaseDatosAirtableService', () => {
  let service: BaseDatosAirtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatosAirtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
