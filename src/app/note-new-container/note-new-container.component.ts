import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Notes } from '../models/user.model';
import { FundooAppService } from '../service/fundoo-app.service';
import { MatDialog } from '@angular/material/dialog';
import { EditContainerComponent } from '../edit-container/edit-container.component';

@Component({
  selector: 'app-note-new-container',
  templateUrl: './note-new-container.component.html',
  styleUrls: ['./note-new-container.component.scss']
})
export class NoteNewContainerComponent implements OnInit {

  constructor(private service:FundooAppService, private matDialog:MatDialog) { }

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

  newlyAddedNote:Notes[]=[];
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
            this.newlyAddedNote=res.note;
            debugger
            this.usersPrint.unshift(...this.newlyAddedNote);

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

  UpdatedNotes={
    id:'',
    title:'',
    description:'',
    color:''
  }

  noteTodo=true;
  notesIncrease(Notes:any){
    this.noteTodo=false;
    // console.log(Notes);
    // console.log(" from Increase");
    
    
    const dialogRef=this.matDialog.open(EditContainerComponent, {width:'560px', data:Notes, panelClass: 'custom-modalbox'});
    dialogRef.afterClosed().subscribe(resp => {
      console.log('The dialog was closed');
      
      var res=this.usersPrint.filter(obj => obj.id === Notes.id );
      console.log(res);

      const obj = Object.assign({}, ...res);
      //console.log("==============");
      
      this.UpdatedNotes.id=obj.id;
      this.UpdatedNotes.title=obj.title;
      this.UpdatedNotes.description=obj.description;
      this.UpdatedNotes.color=obj.color;

      this.service.updateNotes(this.UpdatedNotes).subscribe(res=>{
        console.log(res);
        this.noteTodo=true;
        
      })
      //console.log(this.UpdatedNotes);
      //console.log("Updated notes");
      
      
      
    });

  }

  // notesDecrease(){
  //   this.noteTodo=false;
  // }


  handleArchive($Id:any){
    this.usersPrint=this.usersPrint.filter(res=>res.id!=$Id)
  }

  handleTrash($Id:any){
    this.usersPrint=this.usersPrint.filter(res=>res.id!=$Id)
  }


  addColor={
    id:'',
    color:''
  }
  //@ViewChild('CardColorChange') CardColorChange:any; 
  changeIteratedCardColor($event:any, note:any){
    debugger
    if($event!=null){
      console.log($event);
      this.addColor.color=$event;
      this.addColor.id=note.id;
      
      //this.CardColorChange.nativeElement.style.backgroundColor=$event
      this.service.addColor(this.addColor).subscribe(res=>{
        console.log(res);
        
      })
    }

    this.usersPrint=this.usersPrint.map((item : any)=>{
      if(item.id===this.addColor.id){
        return {...item, color:this.addColor.color}
      }
      return item;
    });
    this.usersPrint=this.usersPrint.filter(res=>res.isArchive==false && res.isTrash==false)

  }

}
