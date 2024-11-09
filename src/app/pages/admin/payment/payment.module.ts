import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaymentModule { }
