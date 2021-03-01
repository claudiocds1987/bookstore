import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  createSale(sale: Sale){
    return this.http.post('http://localhost:4000/sales/create', sale);
  }

  getLastIdSale() {
    return this.http.get<number>('http://localhost:4000/sales/lastIdSale');
  }

  getSalesByCustomerId(id: number){
    return this.http.get<Sale[]>('http://localhost:4000/sales/customer/' + id);
  }

  // devuelve la "cantidad de ventas" del año y mes elegidos.
  countSalesFromMonth(year: number, month: number){
    return this.http.get<any[]>(`http://localhost:4000/sales/countFromMonth/${year}/${month}`);
  }

  // devuelve la "cantidad de ventas" de un año particular.
  countSalesFromYear(year: number){
    return this.http.get<any[]>(`http://localhost:4000/sales/countFromYear/${year}`);
  }

  // devuelve la "recaudacion total" del año y mes elegidos.
  salesRevenueByYearAndMonth(year: number, month: number){
    return this.http.get<any[]>(`http://localhost:4000/sales/revenueByYearAndMonth/${year}/${month}`);
  }

  // devuelve la "recaudacion total" de un año particular.
  salesRevenueFromYear(year: number){
    return this.http.get<any[]>(`http://localhost:4000/sales/revenueFromYear/${year}`);
  }

  // devuelve 10 o menos (dependiendo del resultado) libros mas vendidos cuya cantidad de ventas es igual o superior a 5.
  getBookTopSales(){
    return this.http.get<any[]>('http://localhost:4000/sales/bookTopSales');
  }

}
