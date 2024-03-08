import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { FundooAppService } from '../service/fundoo-app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginObj:any={
      email:"",
      password:""
  }



  usersPrint:User[]=[];
  password=false;

  constructor(private user:FundooAppService, private router:Router){

  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  passwordToggle(){
    this.password=!this.password;
  }

    getAllUsers(){
      this.user.refreshUser().subscribe(resp=>{
        this.usersPrint=resp;
        console.log(resp)
        console.log(this.usersPrint[1].first_Name)
      }, (err:HttpErrorResponse)=>{
        console.log(err)
      });
    }

    loginProcess(){
      debugger;

        this.user.loginUser(this.loginObj).subscribe(res=>{
          if(res.result){
            console.log(res);
            alert("Login Success");
            localStorage.setItem('token', res.user.token)
            localStorage.setItem('id', res.user.id)
            localStorage.removeItem('firstName');
            localStorage.setItem('first_name', res.user.first_name)
            this.router.navigate(['dashboard'], {queryParams:res.user});
            this.user.user=res.user;

          }
        }, (err:HttpErrorResponse)=>{
          console.log(err)
          if(err.error.result==false){
            alert("login unsuccess")
          }
        })

        
      
    }
    

}
