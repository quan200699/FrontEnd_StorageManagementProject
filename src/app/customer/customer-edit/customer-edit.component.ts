import {Component, OnInit} from '@angular/core';
import {Customer} from '../../interface/customer';
import {Subscription} from 'rxjs';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
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
        console.log(error);
      });
    });
  }

  editCustomer(customerForm) {
    this.customerService.editCustomer(this.customer.id, customerForm.value).subscribe(() => {
      this.successMessage = 'Cập nhật thành công';
    }, error => {
      this.failMessage = 'Cập nhật thất bại';
    });
  }
}
