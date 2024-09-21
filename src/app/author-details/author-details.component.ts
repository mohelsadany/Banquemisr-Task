import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../open-library.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.sass']
})
export class AuthorDetailsComponent implements OnInit {
  author: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookService.getAuthorDetails(`/authors/${params['id']}`).subscribe(data => {
        this.author = data;
      }, error => {
        console.error('Failed to fetch author details:', error);
      });
    });
  }
}
