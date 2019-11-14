import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerDeleteComponent} from './customer/customer-delete/customer-delete.component';
import {CustomerDetailComponent} from './customer/customer-detail/customer-detail.component';


const routes: Routes = [
  {
    path: 'list-customer',
    component: CustomerListComponent
  },
  {
    path: 'create-customer',
    component: CustomerCreateComponent
  },
  {
    path: 'list-customer/edit-customer/:id',
    component: CustomerEditComponent
  },
  {
    path: 'list-customer/delete-customer/:id',
    component: CustomerDeleteComponent
  },
  {
    path: 'list-customer/detail-customer/:id',
    component: CustomerDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
