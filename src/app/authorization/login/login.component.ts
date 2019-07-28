import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private builder:FormBuilder) { }

  loginForms=this.builder.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForms.value);
    let userData:any=JSON.parse(sessionStorage.getItem("userData"));
    if(userData.emailId===this.loginForms.value.email && userData.password===this.loginForms.value.password){
    this.router.navigate(['/home']);
    console.log('Authenticated');

    }
    

  }

}
