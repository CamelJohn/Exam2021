import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CityFormComponent } from './city-form/city-form.component';
import { ClassifyComponent } from './classify/classify.component';
import { TemperaturesComponent } from './temperatures/temperatures.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'temperatures/:city', component: TemperaturesComponent },
  { path: 'classify/:network', component: ClassifyComponent },
  { path: 'city', component: CityFormComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
