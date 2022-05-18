import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signupForm !: FormGroup;
  selectedFile =null;


  constructor(private formBuilder:FormBuilder,
              private http:HttpClient,
              private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullName:['', Validators.required],
      userName:['', Validators.required],
      email:['', Validators.required],
      mobile:['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      department:['', Validators.required],
      password:['', Validators.required]
    })
  }

  signUp(){
        this.http.post<any>("http://localhost:3000/signUpUsers",this.signupForm.value).subscribe((res)=>{
          if(res){
            alert("SignUp Successfull");
            this.signupForm.reset();
            this.router.navigate(['login']); 
          }
        })
  }

  onFileSelected(event: any){
    // console.log(event);
    this.selectedFile = event.target.files[0];
  }

}
