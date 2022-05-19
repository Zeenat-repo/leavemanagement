import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { HodComponent } from './hod.component';

const routes: Routes = [
  { path: '', component: SidebarMenuComponent },
  {
    path: 'dashboard',
    component: SidebarMenuComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HodRoutingModule { }
