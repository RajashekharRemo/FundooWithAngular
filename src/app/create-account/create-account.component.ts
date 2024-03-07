
import { Component, OnInit } from '@angular/core';
import { FundooAppService } from '../service/fundoo-app.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],

})
export class CreateAccountComponent implements OnInit {

  constructor(private services:FundooAppService) { }

  ngOnInit(): void {
  }



  registerObj:any={
    First_Name:'',
    Last_Name:'',
    Email:'',
    Password:''
  }

  confirmPassword:string="";
  isFormSubmitted:boolean=false;



  registerFunction(){
    this.isFormSubmitted=true;
    debugger;
      if(this.confirmPassword===this.registerObj.Password){
        this.services.registerUser(this.registerObj).subscribe(res=>{
            if(res.result){
              alert("Register Success");
              console.log(res);
            }
        })
      }
      
  }

}
