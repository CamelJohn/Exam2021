import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'temperatures', component: TemperaturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
