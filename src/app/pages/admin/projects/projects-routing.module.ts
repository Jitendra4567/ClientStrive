import { RouterModule, Routes } from '@angular/router';

import { AddProjectComponent } from './add-project/add-project.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path:'',
    component:ProjectsComponent
  },
  {
    path:'add',
    component:AddProjectComponent
  },
  {
    path:'add/:projectId',
    component:AddProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
