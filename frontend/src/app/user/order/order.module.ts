import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { OrderRoutingModule } from './order-routing.module';
import { NgxPaginationModule } from 'ngx-pagination'; // para los pagination


@NgModule({
  declarations: [
    OrdersListComponent,
    OrderDetailComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    MaterialModule
  ]
})
export class OrderModule { }
