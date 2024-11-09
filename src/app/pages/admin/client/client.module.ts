import { AddClientComponent } from './add-client/add-client.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
