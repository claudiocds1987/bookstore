import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { UserPurchaseDetailComponent } from './user-purchase-detail/user-purchase-detail.component';

const routes: Routes = [
  {
    path: 'user-purchases',
    component: UserPurchasesComponent
  },
  {
    path: 'user-purchase-detail/:idOrder',
    component: UserPurchaseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPurchasesRoutingModule { }
