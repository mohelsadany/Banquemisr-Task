import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {
  private apiUrl = 'https://openlibrary.org/subjects/';

  constructor(private http: HttpClient) { }

  getBooksBySubject(subject: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${subject}.json?limit=9`);
  }
}
