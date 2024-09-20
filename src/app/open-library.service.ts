import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org/subjects/';

  constructor(private http: HttpClient) { }

  getBooksBySubject(subject: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${subject}.json`)
      .pipe(
        catchError(error => {
          throw 'error in getting books: ' + error;
        })
      );
  }

  getBookDetails(bookKey: string): Observable<any> {
    return this.http.get(`https://openlibrary.org${bookKey}.json`);
  }
}
