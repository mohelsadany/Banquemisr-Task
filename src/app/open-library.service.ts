import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'})
export class BookService {
  private baseUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  getBooksBySubject(subject: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/subjects/${subject}.json`);
  }

  getBookDetails(bookKey: string): Observable<any> {
    // Ensure there's a slash before the bookKey
    if (!bookKey.startsWith('/')) {
      bookKey = '/' + bookKey;
    }
    return this.http.get(`${this.baseUrl}${bookKey}.json`);
  }

  getAuthorDetails (authorKey: string): Observable<any> {
    // Ensure there's a slash before the authorKey
    if (!authorKey.startsWith('/')) {
      authorKey = '/' + authorKey;
    }
    return this.http.get(`${this.baseUrl}${authorKey}.json`);
  }
}
