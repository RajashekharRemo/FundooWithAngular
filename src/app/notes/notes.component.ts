import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { FundooAppService } from '../service/fundoo-app.service';
import { Notes } from '../models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  user:any={
    id:'',
    first_name:'',
    last_Name:'',
    email:'',
    token:''
  }


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
      console.log(params.id);
      this.user=params;
      debugger;
      console.log(this.user.id)
    })

    this.getAllNotes();
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

  callSide:string='1';
  callSideRoutes(e:any){
    this.callSide=e;
  }


  expansion=true;

  formData:FormData=new FormData();

  expansionTitle(){
    debugger;
    this.expansion=!this.expansion;
    this.d.nativeElement.style.backgroundColor='#fff';
    this.noteObj.userId=this.user.id;
    if(this.noteObj.color===''){
      this.noteObj.color='#fff';
    }
    
    //console.log(this.noteObj);
    if(this.noteObj.title==='' && this.noteObj.description===''){

    }else{
      this.service.createNoteOld(this.noteObj).subscribe((res)=>{
        //console.log(res)
        this.noteObj.title='';
        this.noteObj.color='#fff';
        this.noteObj.description='';
        this.ngOnInit();
      },(err)=>{
        console.log(err);
        
      })
    }
    

    
  }



  usersPrint:Notes[]=[];

  getAllNotes(){
    debugger;
    this.service.getAllNotes(this.user.id).subscribe(resp=>{
      this.usersPrint=resp.filter((res)=>{
        
        if (res.isArchive) {
            return false; // Exclude this user
        }

          return true;
          })
    console.log(resp[0].isArchive)

    console.log(this.usersPrint[0].isArchive+" from Get method")
      this.usersPrint.reverse();
      console.log(resp)
      console.log(this.usersPrint[1])
    }, (err:HttpErrorResponse)=>{
      console.log(err)
    });
  }


  
  //color='';

  handleEvent($event:any){

    this.d.nativeElement.style.backgroundColor=$event;
    this.noteObj.color=$event;
    
  }

  @ViewChild('fetchExpansionDivEle') d:any;
  

//===================================

  archive(){
    this.router.navigate(['archive'], {queryParams:this.user});
  }





}
