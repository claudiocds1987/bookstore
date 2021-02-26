import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardSalesComponent } from './components/dashboard-sales/dashboard-sales.component';
// Guardianes
import { AdminGuard } from 'src/app/admin.guard';

const routes: Routes = [
  {
    path: 'dashboard-sales',
    canActivate: [AdminGuard],
    component: DashboardSalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
