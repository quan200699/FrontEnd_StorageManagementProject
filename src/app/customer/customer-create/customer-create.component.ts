import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  successMessage = '';
  failMessage = '';
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
  createCustomer(customerForm) {
    this.customerService.createCustomer(customerForm.value).subscribe(() => {
      this.successMessage = 'Tạo Mới Thành Công';
    }, error => {
      this.failMessage = 'Tạo Mới Thất Bại';
    });
  }
}
