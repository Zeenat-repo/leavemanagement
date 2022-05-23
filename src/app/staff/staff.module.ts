import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { MatModule } from '../mat.module';
import { DashboardComponent } from '../hod/dashboard/dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';



@NgModule({
  declarations: [
    StaffComponent,
    StaffDashboardComponent,
    LeaveManagementComponent,


  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MatModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [StaffComponent],
})
export class StaffModule { }
