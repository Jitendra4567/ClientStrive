import { RouterModule, Routes } from '@angular/router';

import { AddClientComponent } from './add-client/add-client.component';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'',
    component:ClientComponent
  },
  {
    path:'add',
    component:AddClientComponent
  },
  {
    path:'add/:clientId',
    component:AddClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
