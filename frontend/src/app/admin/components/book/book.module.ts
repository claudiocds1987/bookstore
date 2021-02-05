import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { MaterialModule } from '../../../material/material.module';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgxPaginationModule } from 'ngx-pagination'; // para los pagination
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { AuthorPanelComponent } from './components/author-panel/author-panel.component';
import { CategoryPanelComponent } from './components/category-panel/category-panel.component';
import { EditorialPanelComponent } from './components/editorial-panel/editorial-panel.component';

@NgModule({
  declarations: [
    CreateBookComponent,
    BookListComponent,
    EditBookComponent,
    AuthorPanelComponent,
    CategoryPanelComponent,
    EditorialPanelComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MaterialModule
  ]
})
export class BookModule { }
