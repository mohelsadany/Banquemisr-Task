import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/open-library.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.sass']
})
export class AuthorDetailsComponent implements OnInit {
  author: any = null;
  isLoading: boolean = true;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookService.getAuthorDetails(`/authors/${params['id']}`).subscribe({
        next: (data) => {
          this.isLoading = false;
          this.author = {
            name: data.name,
            bio: data.bio ? data.bio.value || data.bio : 'No biography available.',
            birth_date: data.birth_date || 'Unknown',
            top_works: data.top_works || [],
            subjects: data.subjects || []
          };
        },
        error: (error) => {
          console.error('Failed to fetch author details:', error);
          this.isLoading = false;
        }
      });
    });
  }
}
