import { TestBed } from '@angular/core/testing';
import { BookService } from './open-library.service';



describe('OpenLibraryService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
