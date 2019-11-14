import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../interface/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private customerList: Customer[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customerService.getCustomer().subscribe(next => {
      this.customerList = next;
    });
  }
}
