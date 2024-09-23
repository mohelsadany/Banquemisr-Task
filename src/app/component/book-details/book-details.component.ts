import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/open-library.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.sass']
})
export class BookDetailsComponent implements OnInit {
  book: any = null;
  isLoading = false;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isLoading = true;
      this.bookService.getBookDetails('/works/' + params['id']).subscribe({
        next: (data) => {
          this.book = {
            title: data.title,
            authors: data.authors || [{ name: 'Unknown' }],
            cover_id: data.cover_id,
            publish_year: data.first_publish_year,
            subjects: data.subjects || [],
            description: data.description ? data.description.value || data.description : 'No description available.'
          };
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Failed to fetch book details:', error);
          this.isLoading = false;
        }
      });
    });
  }
}
