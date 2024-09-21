import { Component, OnInit } from '@angular/core';
import { BookService } from '../open-library.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooksBySubject('finance').subscribe({
      next: (data) => {
        if (data && data.works) {
          this.books = data.works.map(work => ({
            title: work.title,
            cover_id: work.cover_id,
            key: work.key,
            edition_count: work.edition_count,
            first_publish_year: work.first_publish_year,
            authors: work.authors,
            subject: work.subject.slice(0, 5)  // Taking first 5 subjects
          })).slice(0, 9);
        } else {
          console.error('No books returned from API.');
          this.books = [];
        }
        console.log('Books loaded successfully:', this.books);
      },
      error: (error) => {
        console.error('Failed to fetch books:', error);
      }
    });
  }
}
