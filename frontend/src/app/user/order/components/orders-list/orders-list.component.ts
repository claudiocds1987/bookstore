import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { OrderService } from '../../../../services/order.service';
import { UserService } from '../../../../services/user.service';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  constructor(
    public orderService: OrderService,
    public userService: UserService,
    public alertService: AlertService
  ) { }

  ordersArray: Order[] = []; // ordersArray para hacer el .filter cuyo resultado se guarda en filterOrdersArray
  filterOrdersArray: Order[] = [];
  userArray: User[] = []; 
  date1: Date;
  date2: Date;
  btnDisabled: boolean = true;
  message = 'No se encontraron resultados'; 
  actualPage: number = 1 // para pagination

  ngOnInit(): void {
     // localStorage 'username' fue creada en auth.service.ts funcion loginUser() cuando hizo login en user-login.component.ts
     const username = localStorage.getItem('username');
     this.getOrders(username);
  }

  getOrders(username: string) {
    // antes de obtener las orders traigo la data del usuario 
    this.userService.getUserByUserName(username)
      .subscribe(res => {
        console.log('res: ' + JSON.stringify(res));
        this.userArray = res; // obtengo la data del usuario
        //paso el id_user porque en orders el user se identifica con su id
        this.getOrdersByUserId(this.userArray[0].id_user);
      },
        err => console.error('Error al obtener el username en ngOnInit ' + err)
      );
  }

  getOrdersByUserId(idUser: number) {
    this.orderService.getOrdersByUserId(idUser)
      .subscribe(res => {
        // res lo guardo en los 2 array porque si se hace filterOrdersByDate() necesito filtrar array ordersArray
        // cuyo resultado lo guardo en array filterOrdersArray
        this.ordersArray = res;
        this.filterOrdersArray = res;
      },
        err => console.error('No se pudo obtener las ordenes de compra del usuario ' + err)
      );
  }

  filterOrdersByDate() {
    if (this.date1 === undefined || this.date2 === undefined) {    
      this.alertService.showWarning('Debe elegir un rango de fecha', '');
    }
    else {
      this.btnDisabled = false; // se habilita btn listar todos
      const startDate = new Date(this.date1);
      const endDate = new Date(this.date2);
      // obteniendo las ordenes por fecha en el array filterOrdersArray
      this.filterOrdersArray = this.ordersArray.filter(a => {
        const date = new Date(a.order_date);
        return date >= startDate && date <= endDate;
      })
    }
  }

  listAllOrders() {
    this.btnDisabled = true; // deshabilito btn listar todos
    this.date1 = undefined;
    this.date2 = undefined;
    this.getOrdersByUserId(this.userArray[0].id_user);
  }

}

