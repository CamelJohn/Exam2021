import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BooksService } from '../books.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  //books;
  books$; 

  panelOpenState = false;
  constructor(private booksService:BooksService, public authService:AuthService) { }

  ngOnInit(): void {
    //this.booksService.addBooks(); 
    this.books$ = this.booksService.getBooks();
    //this.books$.subscribe(books => this.books = books);
  }

}
