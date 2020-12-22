import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class BooksService {


  books = [{title:'Alice in Wonderland', author:'Lewis Carrol', summary:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"},
  {title:'War and Peace', author:'Leo Tolstoy', summary:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"},
  {title:'The Magic Mountain', author:'Thomas Mann', summary:"the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}];

  public addBooks(){
    setInterval(()=>this.books.push({title:'A new one',author:'New author',summary:'Short summary'}),2000);
  }
  
  /*
  public getBooks(){
    const booksObservable = new Observable(obs => {
      setInterval(()=>obs.next(this.books),500)
    });
    return booksObservable;  
  } 
 */ 

  bookCollection:AngularFirestoreCollection; 
  
  public getBooks(userId){
    this.bookCollection = this.db.collection(`users/${userId}/books`); 
    return this.bookCollection.snapshotChanges().pipe(map(
      collection =>collection.map(
        document => {
          const data = document.payload.doc.data(); 
          data.id = document.payload.doc.id;
          return data; 
        }
      )
    ))
    
  } 

  deleteBook(Userid:string, id:string){
    this.db.doc(`users/${Userid}/books/${id}`).delete(); 
  } 

  /*
  public getBooks(){
    return this.books;  
  }
  */

  

  /*
  getBooks(userId):Observable<any[]>{
    
  }
  */
  
  //constructor(private db:AngularFirestore) { }
  
  
  
  
  constructor(private db:AngularFirestore) { }



}
