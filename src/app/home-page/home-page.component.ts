import { Component, OnInit } from '@angular/core';
import { BookService } from '../open-library.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  books: any[] = [];
  currentPage = 1;
  totalBooks = 0;
  booksPerPage = 10;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }
  loadBooks(page: number = this.currentPage): void {
    this.bookService.getBooksBySubject('finance', page, this.booksPerPage).subscribe({
      next: (data) => {
        if (data && data.works) {
          this.books = data.works.map(work => ({
            title: work.title,
            cover_id: work.cover_id,  // Assuming cover_id is directly available
            cover_url: work.cover_id ? `http://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg` : 'assets/placeholder.jpg',
            author_name: work.authors ? work.authors.map(author => author.name).join(', ') : 'Unknown Author',
            subjects: work.subjects || 'No Categories Listed',
            key: work.key
          }));
          this.totalBooks = data.total; // Assuming API provides a total count
          this.currentPage = page;
        } else {
          this.books = [];
          console.error('No books returned from API.');
        }
      },
      error: (error) => {
        console.error('Failed to fetch books:', error);
        this.books = [];
      }
    });
  }

  goToPage(page: number): void {
    this.loadBooks(page);
  }
}
