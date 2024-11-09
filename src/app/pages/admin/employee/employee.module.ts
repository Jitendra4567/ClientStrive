import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
