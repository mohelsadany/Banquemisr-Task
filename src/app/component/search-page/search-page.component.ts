import { Component } from '@angular/core';
import { BookService } from 'src/app/services/open-library.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent {
  searchResults: any[] = [];
  searchTerm: string = '';
  sortOption: string = 'relevance';
  filterSubject: string;

  constructor(private bookService: BookService) { }

  performSearch(term: string): void {
    if (!term.trim()) return; // Avoid searching with empty or whitespace
    this.bookService.searchBooks(term, this.sortOption, this.filterSubject).subscribe({
      next: (data) => this.searchResults = data.docs,
      error: (error) => console.error('Search failed:', error)
    });
  }
}
