import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/open-library.service';
import { FavoritesService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  books: any[] = [];
  isLoading = false;
  currentPage = 1;
  totalBooks = 0;
  booksPerPage = 10;
  totalPages = 0; // Add this line

  constructor(private bookService: BookService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(page: number = this.currentPage): void {
    this.isLoading = true;
    this.bookService.getBooksBySubject('finance', page, this.booksPerPage).subscribe({
      next: (data) => {
        if (data && data.works) {
          this.books = data.works.map(work => ({
            title: work.title,
            cover_id: work.cover_id,
            cover_url: work.cover_id ? `http://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg` : 'assets/placeholder.jpg',
            author_name: work.authors ? work.authors.map(author => author.name).join(', ') : 'Unknown Author',
            subjects: work.subjects || 'No Categories Listed',
            key: work.key,
            edition_count: work.edition_count,
            first_publish_year: work.first_publish_year,
            isFavorite: this.favoritesService.isFavorite(work.key)
          }));
          this.totalBooks = data.total; // Assuming API provides a total count
          this.totalPages = Math.ceil(this.totalBooks / this.booksPerPage);

        } else {
          this.books = [];
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to fetch books:', error);
        this.isLoading = false;
      }
    });
  }

  toggleFavorite(book: any): void {
    this.favoritesService.toggleFavorite(book);
    book.isFavorite = this.favoritesService.isFavorite(book.key);
}

  goToPage(page: number): void {
    this.loadBooks(page);
  }
}
