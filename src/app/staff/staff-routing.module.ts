import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardForStaffComponent } from '../dashboard-for-staff/dashboard-for-staff.component';
import { EmployeeDashboardComponent } from '../employee-dashboard/employee-dashboard.component';
import { DashboardComponent } from '../hod/dashboard/dashboard.component';
import { StaffManagementComponent } from '../hod/staff-management/staff-management.component';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  { path: '', component: StaffComponent },
  // {
  //   path: 'dashboard',
  //   component: StaffManagementComponent
  // },
  {
    path: 'dashboard',
    component: SidebarMenuComponent
  },
  {
    path: 'staff-management',
    component: StaffManagementComponent
  },
  {
    path: 'dasboard',
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
