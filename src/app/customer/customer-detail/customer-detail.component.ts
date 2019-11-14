import { Component, OnInit } from '@angular/core';
import {Customer} from '../../interface/customer';
import {Subscription} from 'rxjs';
import {CustomerService} from '../../service/customer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  sub: Subscription;
  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }

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

}
