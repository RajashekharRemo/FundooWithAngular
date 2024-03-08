import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesComponent } from '../notes/notes.component';
import { FundooAppService } from '../service/fundoo-app.service';
import { Notes } from '../models/user.model';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
  providers: [FundooAppService]
})
export class NotesContainerComponent implements OnInit {

   
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

  constructor(private router:Router, private notes:NotesComponent, private activeRoute:ActivatedRoute, private service:FundooAppService) { }

  ngOnInit(): void {
    // this.activeRoute.queryParams.subscribe((params:any)=>{ // u have passed values in login.ts but u can access any where note routing
    //   console.log(params.id);
    //   this.user=params;
    //   debugger;
    //   console.log(this.user.id)
    // })

    //this.getAllNotes();
  }





  // expansion=true;

  // expansionTitle(){
  //   debugger;
  //   this.expansion=!this.expansion;
  //   this.d.nativeElement.style.backgroundColor='#fff';
  //   this.noteObj.userId=this.user.id;
  //   if(this.noteObj.color===''){
  //     this.noteObj.color='#fff';
  //   }
    
  //   //console.log(this.noteObj);
  //   if(this.noteObj.title==='' && this.noteObj.description===''){

  //   }else{
  //     this.service.createNoteOld(this.noteObj).subscribe((res)=>{
  //       //console.log(res)
  //       this.noteObj.title='';
  //       this.noteObj.color='#fff';
  //       this.noteObj.description='';
  //       this.ngOnInit();
  //       this.callParent();
  //     },(err)=>{
  //       console.log(err);
        
  //     })
  //   }
    

    
  // }



  // usersPrint:Notes[]=[];

  // getAllNotes(){
  //   debugger;
  //   this.service.getAllNotes(this.user.id).subscribe(resp=>{
  //     this.usersPrint=resp.filter((res)=>{
        
  //       if (res.isArchive|| res.isTrash) {
  //           return false; // Exclude this user
  //       }

  //         return true;
  //         })
  //   //console.log(resp[0].isArchive)

  //   console.log(this.usersPrint[0].isArchive+" from Get method")
  //     this.usersPrint.reverse();
  //     //console.log(resp)
  //     console.log(this.usersPrint[1])
  //   }, (err:HttpErrorResponse)=>{
  //     console.log(err)
  //   });
  // }


  
  //color='';

//   handleEvent($event:any){

//     this.d.nativeElement.style.backgroundColor=$event;
//     this.noteObj.color=$event;
    
//   }

//   @ViewChild('fetchExpansionDivEle') d:any;
//   @Output() parent=new EventEmitter();
//   callParent():void{
//     this.parent.emit()
//   }
  

// //===================================



}
