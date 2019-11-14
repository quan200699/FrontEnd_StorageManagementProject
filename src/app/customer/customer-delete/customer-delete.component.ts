import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../interface/customer';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  successMessage = '';
  failMessage = '';
  customer: Customer;
  sub: Subscription;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.customerService.customerDetail(id).subscribe(next => {
        this.customer = next;
      }, error => {
        this.failMessage = error.toString()
      });
    });
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.customer.id).subscribe(() => {
      this.successMessage = 'Xóa thành công';
    }, error => {
      this.failMessage = 'Xóa thất bại';
    });
  }

}
