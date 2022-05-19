import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signupForm !: FormGroup;
  selectedFile = null;
  departmentList: any = [];
  userTypeList: any = [];


  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private commonService: CommonService

  ) { }

  ngOnInit(): void {
    this.loadInit()
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      department: ['', Validators.required],
      userType: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/signUpUsers", this.signupForm.value).subscribe((res) => {
      if (res) {
        alert("SignUp Successfull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      }
    })
  }

  onFileSelected(event: any) {
    // console.log(event);
    this.selectedFile = event.target.files[0];
  }

  loadInit() {
    this.getDepartment();
    this.getUserType();
  }
  getDepartment() {
    this.commonService.getDepartment().subscribe(result => {
      console.log("department:", result)
      this.departmentList = result;
    });

  }
  getUserType() {
    this.commonService.getUserType().subscribe(result => {
      console.log("department:", result)
      this.userTypeList = result;
    });

  }
}
