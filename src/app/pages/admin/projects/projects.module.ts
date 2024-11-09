import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddProjectComponent } from './add-project/add-project.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProjectsModule { }
