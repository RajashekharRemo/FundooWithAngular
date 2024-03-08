import { Component, OnInit, ViewChild } from '@angular/core';
import { Notes } from '../models/user.model';
import { FundooAppService } from '../service/fundoo-app.service';

@Component({
  selector: 'app-note-new-container',
  templateUrl: './note-new-container.component.html',
  styleUrls: ['./note-new-container.component.scss']
})
export class NoteNewContainerComponent implements OnInit {

  constructor(private service:FundooAppService) { }

  ngOnInit(): void {
    this.getAllNotes();
    
  }


  user:any={
    id:'',
    first_name:'',
    token:''
  }

  noteObj={
    title:'',
    description:'',
    color:'',
    reminder: "2024-03-05T10:39:23.263Z",
    isArchive:false,
    isPinned:false,
    isTrash:false
  }

  usersPrint:Notes[]=[];

  getAllNotes(){
    debugger;
    this.service.getAllNotes(localStorage.getItem('id')).subscribe(resp=>{
      this.usersPrint=resp.filter((res)=>{
        
        if (res.isArchive || res.isTrash) {
            return false; // Exclude this user
        }

          return true;
          })
          this.usersPrint.reverse();
    // console.log(resp[0].isArchive)

    // console.log(this.usersPrint[0].isArchive+" from Get method")
    //   console.log(resp)
    //   console.log(this.usersPrint[1])
    });
  }


  



  handleEvent($event:any){

    this.d.nativeElement.style.backgroundColor=$event;
    this.noteObj.color=$event;
    
  }


  expansion=true;
  expansionTitle(){
    this.expansion=!this.expansion;
    this.d.nativeElement.style.backgroundColor='#fff';
    if(this.noteObj.color===''){
       this.noteObj.color='#fff';
    }

    if(this.noteObj.title==='' && this.noteObj.description===''){

    }else{
          this.service.createNoteOld(this.noteObj).subscribe((res)=>{
            console.log(res)
            console.log('Created');
            
            this.noteObj.title='';
            this.noteObj.color='#fff';
            this.noteObj.description='';
        },(err)=>{
            console.log(err);
                
        })
  }
  }

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
  //       //this.ngOnInit();
  //       //this.callParent();
  //     },(err)=>{
  //       console.log(err);
        
  //     })
  //   }
  // }

  @ViewChild('fetchExpansionDivEle') d:any;


  noteTodo=false;
  notesIncrease(){
    this.noteTodo=true;
  }

  notesDecrease(){
    this.noteTodo=false;
  }


  handleArchive($Id:any){
    this.usersPrint=this.usersPrint.filter(res=>res.id!=$Id)
  }

  handleTrash($Id:any){
    this.usersPrint=this.usersPrint.filter(res=>res.id!=$Id)
  }

}
