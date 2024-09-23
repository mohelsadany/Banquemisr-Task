import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'})
export class BookService {
  private baseUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }


  getBooksBySubject(subject: string, page: number = 1, limit: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('offset', `${(page - 1) * limit}`)
      .set('limit', `${limit}`);
    return this.http.get(`${this.baseUrl}/subjects/${subject}.json`, { params });
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

  searchBooks(term: string, sort: string = 'relevance', filter?: string): Observable<any> {
    let params = new HttpParams()
      .set('q', term)
      .set('sort', sort);

    if (filter) {
      params = params.set('subject', filter);
    }

    return this.http.get(`${this.baseUrl}/search.json`, { params });
  }
}
