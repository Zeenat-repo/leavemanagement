import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  

  hide: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private http:HttpClient,
    private router:Router,) { }

  ngOnInit(): void {
    // this.loginForm.reset();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  
  };

 

  onLogin() {
  this.http.get<any>("http://localhost:3000/signUpUsers").subscribe((res)=>{
    if(res){
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user.department == 'HOD'){
        console.log('zee',user);
        
        alert("login success");
        this.loginForm.reset();
        this.router.navigate(['dashboardHod'])
      }else{
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
        // this.router.navigate(['dashboardStaff'])
        
      
        // alert("User not found");
      }
    }else{
      alert("User not found");
    }
   
  });

  }

}
