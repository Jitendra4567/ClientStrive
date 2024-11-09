import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProjectChangesComponent } from './project-changes.component';

const routes: Routes = [
  {
    path:'',
    component:ProjectChangesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectChangesRoutingModule { }
