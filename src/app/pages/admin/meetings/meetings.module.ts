import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MeetingsComponent } from './meetings.component';
import { MeetingsRoutingModule } from './meetings-routing.module';
import { NgModule } from '@angular/core';
import { TextInputHighlightModule } from 'angular-text-input-highlight';

@NgModule({
  declarations: [
    MeetingsComponent
  ],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextInputHighlightModule
  ]
})
export class MeetingsModule { }
