import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { UserPurchasesRoutingModule } from './user-purchases-routing.module';

import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { UserPurchaseDetailComponent } from './user-purchase-detail/user-purchase-detail.component';

@NgModule({
  declarations: [
    UserPurchasesComponent,
    UserPurchaseDetailComponent
  ],
  imports: [
    CommonModule,
    UserPurchasesRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UserPurchasesModule { }
