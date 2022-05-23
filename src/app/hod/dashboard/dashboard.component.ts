import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../../services/leave.service';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private stafffService: StaffService, private leaveService: LeaveService) { }
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
    this.leaveService.getAllLeave().subscribe(result => {
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
