import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { MatModule } from '../mat.module';



@NgModule({
  declarations: [
    StaffComponent,

  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatModule
  ]
})
export class StaffModule { }
