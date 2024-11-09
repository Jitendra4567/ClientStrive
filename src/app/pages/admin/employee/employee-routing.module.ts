import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent
  },
  {
    path:'add',
    component:AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
