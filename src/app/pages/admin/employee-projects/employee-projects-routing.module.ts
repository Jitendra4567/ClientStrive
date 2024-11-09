import { RouterModule, Routes } from '@angular/router';

import { EmployeeProjectsComponent } from './employee-projects.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:EmployeeProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeProjectsRoutingModule { }
