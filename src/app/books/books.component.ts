import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = [{title:'Alice in Wonderland', author:'Lewis Carrol', summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"},
           {title:'War and Peace', author:'Leo Tolstoy', summary:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"},
           {title:'The Magic Mountain', author:'Thomas Mann', summary:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}];

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
