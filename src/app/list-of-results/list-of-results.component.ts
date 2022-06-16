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
  // @Input() public TextQuery:string;  

  private _TextQuery:any;

  @Input()
  set TextQuery(value: string) {
    this._TextQuery = value;
    console.log(`title is changed to ${value}`);
  }
  get TextQuery(): string {
    return this._TextQuery;
  }
  
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.getBooks(this.TextQuery);
    console.log(this._TextQuery);

  }

  getBooks(event:string) {
    this.httpClient.get<BookResponse>(`https://openlibrary.org/search.json?q=${event}`).subscribe((response: BookResponse) => {
      this.books = response.docs;
      this.num_found = response.num_found;
    })
  }
}


