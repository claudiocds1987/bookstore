import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { DashboardSalesComponent } from './components/dashboard-sales/dashboard-sales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { TopSalesComponent } from './components/top-sales/top-sales.component';
// imports para el funcionamiento del spinner/loader para peticiones http
import { NgxSpinnerModule } from 'ngx-spinner';
// para reportes con graficos de barra etc..
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DashboardSalesComponent, TopSalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
    NgxSpinnerModule
  ]
})
export class SalesModule { }
