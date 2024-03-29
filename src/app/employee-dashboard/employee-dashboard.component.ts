import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiCallsService } from '../api-calls.service';
import { EmployeeModel } from './employee-dashboard.model';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue !:FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !:any;
  showAdd !:boolean;
  showUpdate !:boolean;

  constructor(private formbuilder:FormBuilder,
    private api:ApiCallsService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
    })

    this.getAllEmployee();
  }


  postEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
   
  
    this.api.postEmployee(this.employeeModelObj).subscribe((res)=>{
      if(res){
        alert("Employee Added successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      }else{
        alert("something went wrong")
      }
    });
  }
  
  getAllEmployee(){
    this.api.getEmployee().subscribe((res)=>{
      this.employeeData = res
  
    })
  }
  
  deleteEmployee(row:any){
    this.api.deleteEmployee(row.id).subscribe((res)=>{
      if(res){
      alert("Employee Deleted")
      this.getAllEmployee();
      }
    });
  }
  
  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeeModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
  
  }
  
  updateEmployeeDetails(){
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
  
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id).subscribe((res)=>{
      if(res){
        alert("Updated Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllEmployee();
      }
    })
  
  }
  
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false
  }

}
