import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FundooAppService } from '../service/fundoo-app.service';
import { Notes } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dash-board-container',
  templateUrl: './dash-board-container.component.html',
  styleUrls: ['./dash-board-container.component.scss']
})
export class DashBoardContainerComponent implements OnInit {


  user:any={
    id:'',
    first_name:'',
    last_Name:'',
    email:'',
    token:''
  }

  userId='';

  noteObj={
    title:'',
    description:'',
    color:'',
    reminder: "2024-03-05T10:39:23.263Z",
    isArchive:false,
    isPinned:false,
    isTrash:false,
    userId:''
  }

  constructor(private router:Router, private matDialog:MatDialog, private activeRoute:ActivatedRoute, private service:FundooAppService) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params:any)=>{
      //console.log(params.id);
      this.user=params;
      debugger;
      //console.log(this.user.id)
      

    })

  }








  profileDialogValue=false;
  openDialog(){
    this.profileDialogValue=true;
    
  }
  CloseProfileDialog(){
    this.profileDialogValue=false;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
  
  closeoverlay(e:any){
    if(e.target.class.contains('ProfileDialog')){
      this.profileDialogValue=false;
    }
  }

  // callSide:string='1';
  // callSideRoutes(e:any){
  //   this.callSide=e;
  //   if(this.callSide==='1'){
  //     //this.router.navigate(['dashboard/notes-component'], {queryParams:this.user});
  //   }else if(this.callSide==='4'){
  //     this.router.navigate(['dashboard/archive-component'], {queryParams:this.user});
  //   }else if(this.callSide==='5'){
  //     this.router.navigate(['dashboard/trash-component'], {queryParams:this.user});
  //   }

  // }



}
