import { Component, OnInit } from '@angular/core';
import { FundooAppService } from '../service/fundoo-app.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  password=false;
  password2=false;

  user:any={
    id:'',
    first_name:'',
    last_Name:'',
    email:'',
    token:''
  }

  resetObj:any={
    email:'',
    newPassword:'',
    confirmPassword:''
  }

  constructor(private services:FundooAppService) { }

  ngOnInit(): void {
    debugger;
    this.user=this.services.AccessUserAllPlace();
  }

  passwordToggle(){
    this.password=!this.password;
  }
  passwordToggle2(){
    this.password2=!this.password2
  }

  formSubmitted(){
    this.services.resetPassword(this.resetObj).subscribe(res=>{
      console.log(res);
    })
    
  }



}
