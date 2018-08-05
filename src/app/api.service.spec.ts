import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    console.log('api-service beforeEach (regular) only one');
    TestBed.configureTestingModule({
      providers: [ApiService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
