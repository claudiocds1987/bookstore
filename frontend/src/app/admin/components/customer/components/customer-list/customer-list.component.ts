import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../../services/user.service';
import { User } from './../../../../../models/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  searchValue: FormControl;
  customers: User[] = [];
  filteredCustomers: User[] = [];
  // displayedColumns: string[] = ['username', 'email', 'fecha de registro'];
  actualPage: number = 1; // para el pagination
  
  constructor(
    public userService: UserService
  ) { 
    this.searchValue = new FormControl('', [
      Validators.required,
    ]);

    this.searchValue.valueChanges.subscribe(
      value => {
        // const username = value;
        // console.log(username);
        this.searchCustomer(value);
      }
    )
  }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.userService.getUsers().subscribe(
      res => {
        this.customers = res;
        this.filteredCustomers = res;
      }
    )
  }

  searchCustomer(username: string){
    if(username === ''){
      this.getCustomers();
    }else{
      this.filteredCustomers = [];
      this.filteredCustomers.push(...this.customers.filter(item => item.username.includes(username)));
    }
    
  }

}
