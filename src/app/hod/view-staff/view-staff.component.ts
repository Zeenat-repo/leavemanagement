import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.scss']
})
export class ViewStaffComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    // will log the entire data object
    console.log(this.data)
  }

}
