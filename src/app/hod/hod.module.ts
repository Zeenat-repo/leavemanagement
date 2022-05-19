import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HodRoutingModule } from './hod-routing.module';
import { HodComponent } from './hod.component';


@NgModule({
  declarations: [
    HodComponent
  ],
  imports: [
    CommonModule,
    HodRoutingModule
  ]
})
export class HodModule { }
