import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminPrincipalComponent } from './admin/components/admin-principal/admin-principal.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { AdminLoginComponent } from './admin/components/admin-login/admin-login.component';
// Guardianes
import { AdminGuard } from './admin.guard';
//import { EditorialPanelComponent } from './admin/components/book/components/editorial-panel/editorial-panel.component';
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
      },
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
        path: 'customer',
        canActivate: [AdminGuard],
        loadChildren: () => import('./admin/components/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'book',
        loadChildren: () => import('./admin/components/book/book.module').then(m => m.BookModule)
      },
      // {
      //   path: 'editorial-panel',
      //   canActivate: [AdminGuard],
      //   component: EditorialPanelComponent
      // },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
