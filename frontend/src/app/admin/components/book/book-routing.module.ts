import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
// Guardianes
import { AdminGuard } from 'src/app/admin.guard';

const routes: Routes = [
  {
    path: 'create-book',
    canActivate: [AdminGuard],
    component: CreateBookComponent
  },
  {
    path: 'book-list',
    canActivate: [AdminGuard],
    component: BookListComponent
  },
  {
    path: 'edit-book/:id',
    canActivate: [AdminGuard],
    component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
