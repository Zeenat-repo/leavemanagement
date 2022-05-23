import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { LeaveService } from '../../services/leave.service';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss']
})
export class StaffDashboardComponent implements OnInit {

  constructor(private stafffService: StaffService, private leaveService: LeaveService,
    private commonService: CommonService) { }
  data = { staffCount: 0, leaveCount: 0, approvedCount: 0, pendingCount: 0, rejectedCount: 0 }
  staffList: any = [];
  leaveList: any = [];
  ngOnInit(): void {
    this.loadInit();
  }

  loadInit() {
    this.getStaffInfo();
    this.getLeaveInfo();
  }
  getStaffInfo() {
    this.stafffService.getStaffMembers().subscribe(result => {
      if (result) {
        this.staffList = result;
        this.data.staffCount = this.staffList.length;
      }
    })
  }
  getLeaveInfo() {
    let loggedInUser = this.commonService.getLoggedInUser()
    this.leaveService.getAllLeaveByStaffId(loggedInUser['id']).subscribe(result => {
      if (result) {
        this.leaveList = result;
        this.data.leaveCount = this.leaveList.length;
        console.log("LeaveList:", this.leaveList)
        this.data.pendingCount = (this.leaveList.filter((eachRow) => eachRow.status === '1')).length;
        console.log(" this.data.pendingCount:", this.data.pendingCount)
        this.data.approvedCount = this.leaveList.filter((eachRow) => eachRow.status == 2).length;
        this.data.rejectedCount = this.leaveList.filter((eachRow) => eachRow.status == 3).length;
      }
    })
  }

}
