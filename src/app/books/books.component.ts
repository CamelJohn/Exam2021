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
  userId:string; 

  panelOpenState = false;
  constructor(private booksService:BooksService, public authService:AuthService) { }

  deleteBook(id:string){
    this.booksService.deleteBook(this.userId,id); 
  }

  ngOnInit(): void {
    //this.booksService.addBooks(); 
    //this.books$ = this.booksService.getBooks();
    //this.books$.subscribe(books => this.books = books);
    this.authService.getUser().subscribe(
      user => {
        this.userId = user.uid;
        console.log(this.userId); 
        this.books$ = this.booksService.getBooks(this.userId);  
      }
    )

  }

}
