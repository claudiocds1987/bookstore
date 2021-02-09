import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../../services/user.service';
import { User } from './../../../../../models/user';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: User[] = [];
  // displayedColumns: string[] = ['username', 'email', 'fecha de registro'];
  actualPage: number = 1; // para el pagination
  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      res => {
        this.customers = res;
      }
    )
  }

}
