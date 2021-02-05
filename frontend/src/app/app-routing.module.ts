import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminPrincipalComponent } from './admin/components/admin-principal/admin-principal.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { ClientsComponent } from './admin/components/clients/clients.component';
// import { BooksListComponent } from './admin/components/books-list/books-list.component';
// import { EditFormBookComponent } from './admin/components/edit-form-book/edit-form-book.component';
import { AdminLoginComponent } from './admin/components/admin-login/admin-login.component';
//import { HomeComponent } from './user/components/home/home/home.component';
// Guardianes
import { AdminGuard } from './admin.guard';

import { AuthorPanelComponent } from './admin/components/author-panel/author-panel.component';
import { CategoryPanelComponent } from './admin/components/category-panel/category-panel.component';
import { EditorialPanelComponent } from './admin/components/editorial-panel/editorial-panel.component';
//import { OrderComponent } from './order/components/order/order.component';
//import { UserLoginComponent } from './user/components/auth/user-login/user-login.component';
//import { UserSignupComponent } from './user/components/auth/user-signup/user-signup.component';
//import { UserPurchasesComponent } from './user-purchases/user-purchases/user-purchases.component';
//import { UserPurchaseDetailComponent } from './user-purchases/user-purchase-detail/user-purchase-detail.component';
import { BookDetailComponent } from './user/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        // carga al modulo con todos sus componentes
        loadChildren: () => import('./user/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./user/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./user/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'book-detail/:idBook',
        component: BookDetailComponent
      }
    ]
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'admin-principal',
        pathMatch: 'full',
      },
      {
        path: 'admin-principal',
        canActivate: [AdminGuard],
        component: AdminPrincipalComponent
      },
      {
        path: 'clientes',
        canActivate: [AdminGuard],
        component: ClientsComponent
      },
      {
        path: 'book',
        loadChildren: () => import('./admin/components/book/book.module').then(m => m.BookModule)
      },
      // {
      //   path: 'add-book',
      //   canActivate: [AdminGuard],
      //   component: AddBookComponent
      // },
      {
        path: 'author-panel',
        canActivate: [AdminGuard],
        component: AuthorPanelComponent
      },
      {
        path: 'category-panel',
        canActivate: [AdminGuard],
        component: CategoryPanelComponent
      },
      {
        path: 'editorial-panel',
        canActivate: [AdminGuard],
        component: EditorialPanelComponent
      },
      // {
      //   path: 'editar-libro/:id',
      //   canActivate: [AdminGuard],
      //   component: EditFormBookComponent
      // }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
