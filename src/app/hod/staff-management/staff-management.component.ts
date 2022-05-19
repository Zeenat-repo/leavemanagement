import { Component, OnInit } from '@angular/core';

import { StaffService } from 'src/app/services/staff.service';
import { Observable, of } from 'rxjs';
import { IDatasource, IGetRowsParams, GridOptions, GridApi, ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss']
})
export class StaffManagementComponent implements OnInit {
  // gridApi: GridApi;
  constructor(private staffService: StaffService) { }
  gridOptions: GridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20,
    paginationPageSize: 5,
    infiniteInitialRowCount: 2,

  }
  gridApi: GridApi;




  remoteGridBinding = this;

  rowData: any = [];
  columnDefs: ColDef[] = [
    {
      headerName: 'Full Name',
      field: 'fullName',
      sortable: true,
      filter: "agTextColumnFilter"
    },
    {
      headerName: 'UserName',
      field: 'userName',
      sortable: true,
      filter: "agNumberColumnFilter",

    },
    {
      headerName: 'Email Id',
      field: 'email',
      sortable: true,
      filter: "agNumberColumnFilter",

    },
    {
      headerName: 'Mobile',
      field: 'mobile',
      sortable: true,
      filter: "agNumberColumnFilter",

    }
  ];

  // rowData = [
  //   // { make: 'Toyota', model: 'Celica', price: 35000 },
  //   // { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   // { make: 'Porsche', model: 'Boxster', price: 72000 }
  // ];
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.staffService.getStaffMembers().subscribe(result => {
      this.rowData = result;
    });
  }





  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  getData(params: any): Observable<{ data: any; totalRecords: any }> {
    return of({ data: this.rowData, totalRecords: 85 });
  }












}
