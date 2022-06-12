import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { BookResponse } from './model/book-response';
import { Book } from './model/books';

@Component({
  selector: 'app-list-of-results',
  templateUrl: './list-of-results.component.html',
  styleUrls: ['./list-of-results.component.scss']
})
export class ListOfResultsComponent implements OnInit {

  books: Book[];
  num_found: number = 0;
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
    console.log(this.books);
    console.log(this.num_found);
  }

  getBooks() {
    this.httpClient.get<BookResponse>('https://openlibrary.org/search.json?q=Zielona').subscribe((response: BookResponse) => {
      this.books = response.docs;
      this.num_found = response.num_found;
    })
  
  }
}


