import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HodComponent } from './hod.component';
import { AgGridModule } from 'ag-grid-angular';
import { MatModule } from '../mat.module';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { ButtonRendererComponent } from '../button-renderer.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HodComponent,
    StaffManagementComponent,
    ButtonRendererComponent,
    ViewStaffComponent,
    DashboardComponent
  ],
  imports: [
    MatModule,
    CommonModule,
    HodRoutingModule,
    AgGridModule,

  ],
  bootstrap: [HodComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ViewStaffComponent]
})
export class HodModule { }
