import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BooksService } from '../books.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  //books;
  books$; 
  books:Book[];
  userId:string; 
  editstate = [];
  addBookFormOPen = false;
  lastDocumentArrived;  


  panelOpenState = false;
  constructor(private booksService:BooksService, public authService:AuthService) { }

  deleteBook(id:string){
    this.booksService.deleteBook(this.userId,id); 
  }

  update(book:Book){
    this.booksService.updateBook(this.userId,book.id ,book.title, book.author);
  }

  add(book:Book){
    this.booksService.addBook(this.userId,book.title,book.author); 
  }

  nextPage(){
    this.books$ = this.booksService.getBooks(this.userId,this.lastDocumentArrived); 
    this.books$.subscribe(
      docs =>{
        this.lastDocumentArrived = docs[docs.length-1].payload.doc; 
        this.books = [];
        for(let document of docs){
          const book:Book = document.payload.doc.data();
          book.id = document.payload.doc.id; 
          this.books.push(book); 
        }
      }
    )     
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      user => {
        this.userId = user.uid;
        console.log(this.userId); 
        this.books$ = this.booksService.getBooks(this.userId,null); 
        
        this.books$.subscribe(
          docs =>{
            this.lastDocumentArrived = docs[docs.length-1].payload.doc; 
            this.books = [];
            for(let document of docs){
              const book:Book = document.payload.doc.data();
              book.id = document.payload.doc.id; 
              this.books.push(book); 
            }
          }
        ) 
      }
    )

  }

}
