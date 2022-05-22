import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HodComponent } from './hod.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';

const routes: Routes = [
  { path: '', component: HodComponent },
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
export class HodRoutingModule { }
