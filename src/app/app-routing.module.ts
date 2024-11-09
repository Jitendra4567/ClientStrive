import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './layout/admin/admin.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/admin/employee', // Redirect root to /admin
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:'employee',
        loadChildren:()=> import('./pages/admin/employee/employee.module').then(m=>m.EmployeeModule)
      },
      {
        path:'client',
        loadChildren:()=> import('./pages/admin/client/client.module').then(m=>m.ClientModule)
      },
      {
        path:'projects',
        loadChildren:()=> import('./pages/admin/projects/projects.module').then(m=>m.ProjectsModule)
      },
      {
        path:'employee-projects',
        loadChildren:()=> import('./pages/admin/employee-projects/employee-projects.module').then(m=>m.EmployeeProjectsModule)
      },
      {
        path:'meetings',
        loadChildren:()=> import('./pages/admin/meetings/meetings.module').then(m=>m.MeetingsModule)
      },
      {
        path:'project-changes',
        loadChildren:()=> import('./pages/admin/project-changes/project-changes.module').then(m=>m.ProjectChangesModule)
      },
      {
        path:'payment',
        loadChildren:()=> import('./pages/admin/payment/payment.module').then(m=>m.PaymentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
