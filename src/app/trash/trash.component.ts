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
      this.getAllNotes();
    })
  }

  getAllNotes(){
    debugger;
    this.service.getAllNotes(this.user.id).subscribe(resp=>{
      //this.usersPrint=resp;
      //this.usersPrint.reverse();
      this.usersPrint=resp.filter((res)=>{
        
          if (res.isTrash) {
              return true; // Exclude this user
          }

      return false;
      })
      console.log(resp[0].isArchive)

      console.log(this.usersPrint[0].isArchive+"from Get method")
    });
  }


}
