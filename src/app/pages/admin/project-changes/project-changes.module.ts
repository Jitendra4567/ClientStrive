import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectChangesComponent } from './project-changes.component';
import { ProjectChangesRoutingModule } from './project-changes-routing.module';

@NgModule({
  declarations: [
    ProjectChangesComponent
  ],
  imports: [
    CommonModule,
    ProjectChangesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectChangesModule { }
