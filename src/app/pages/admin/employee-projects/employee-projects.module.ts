import { CommonModule } from '@angular/common';
import { EmployeeProjectsComponent } from './employee-projects.component';
import { EmployeeProjectsRoutingModule } from './employee-projects-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeProjectsComponent
  ],
  imports: [
    CommonModule,
    EmployeeProjectsRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeProjectsModule { }
