import { RouterModule, Routes } from '@angular/router';

import { MeetingsComponent } from './meetings.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:MeetingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
