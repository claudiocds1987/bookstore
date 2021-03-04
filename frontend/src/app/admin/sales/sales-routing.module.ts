import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSalesComponent } from './components/dashboard-sales/dashboard-sales.component';
import { TopSalesComponent } from './components/top-sales/top-sales.component';
import { AnnualSalesComponent } from './components/annual-sales/annual-sales.component';
// Guardianes
import { AdminGuard } from 'src/app/admin.guard';

const routes: Routes = [
  {
    path: 'dashboard-sales',
    canActivate: [AdminGuard],
    component: DashboardSalesComponent
  },
  {
    path: 'top-sales',
    canActivate: [AdminGuard],
    component: TopSalesComponent
  },
  {
    path: 'annual-sales',
    canActivate: [AdminGuard],
    component: AnnualSalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
