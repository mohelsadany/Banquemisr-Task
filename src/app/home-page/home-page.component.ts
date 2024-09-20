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
    this.bookService.getBooksBySubject('finance').subscribe(data => {
      this.books = data.works.slice(0, 9);
    });
  }
}
