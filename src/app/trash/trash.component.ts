import { Component, OnInit } from '@angular/core';
import { Notes } from '../models/user.model';
import { FundooAppService } from '../service/fundoo-app.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private service:FundooAppService, private activeRoute:ActivatedRoute) { }

  usersPrint:Notes[]=[];

  user:any={
    id:'',
    first_name:'',
    last_Name:'',
    email:'',
    token:''
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params:any)=>{
      console.log(params.id);
      this.user=params;
      debugger;
      console.log(this.user.id)
    })
  }

  getAllNotes(){
    debugger;
    this.service.getAllNotes(this.user.id).subscribe(resp=>{
      this.usersPrint=resp;
      //this.usersPrint.reverse();
      console.log(resp)
      console.log(this.usersPrint[1])
    });
  }


}
