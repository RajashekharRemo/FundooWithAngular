import { Component, OnInit } from '@angular/core';
import { FundooAppService } from '../service/fundoo-app.service';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { EditContainerComponent } from '../edit-container/edit-container.component';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {

  constructor(private service:FundooAppService, private activeRoute:ActivatedRoute, private matDialog:MatDialog) { }

  usersPrint:Notes[]=[];

  user:any={
    id:'',
    first_name:'',
    last_Name:'',
    email:'',
    token:''
  }

  ngOnInit(): void {
    // this.activeRoute.queryParams.subscribe((params:any)=>{
    //   console.log(params.id);
    //   this.user=params;
    //   debugger;
    // })
    this.getAllNotes();
  }


  getAllNotes(){
    debugger;
    this.service.getAllNotes(localStorage.getItem('id')).subscribe(resp=>{
      //this.usersPrint=resp;
      //this.usersPrint.reverse();
      this.usersPrint=resp.filter((res)=>{
        
          if (res.isTrash) {
              return true; // Exclude this user
          }

      return false;
      })
      
    });
  }



  // noteTodo=false;
  // notesIncrease(){
  //   this.noteTodo=true;
  // }

  // notesDecrease(){
  //   this.noteTodo=false;
  // }


  deleteNote(note:any){
    this.service.deleteNoteById(note.id).subscribe(res=>{
      console.log("Deleted");
      
    })
    this.usersPrint=this.usersPrint.filter(res=>res.id!=note.id )

  }


  noteId:any;
  undoRedo=false;
  xInterval:any;
  newArr:any;
  toggleTrash(note:any){
    this.noteId=note.id
    this.undoRedo=true;
    this.newArr=this.usersPrint.filter(res=>res.id==note.id )
    this.usersPrint=this.usersPrint.filter(res=>res.id!=note.id )
    this.xInterval=setInterval(()=>{
      this.service.trashNoteById(note.id).subscribe(res=>{
      console.log(res);
      this.usersPrint=this.usersPrint.filter(res=>res.id!=note.id )
    })
    this.undoRedo=false;
    }, 6000);
    
    //console.log(this.noteId)
  }

  undo(){
    debugger
    this.undoRedo=false;
    //this.xInterval.
    clearInterval(this.xInterval)
    this.usersPrint.unshift(...this.newArr);
  }
  
UpdatedNotes={
  id:'',
  title:'',
  description:'',
  color:''
}

noteTodo=true;
notesIncrease(Notes:any){
  //this.noteTodo=true;
  // console.log(Notes);
  // console.log(" from Increase");
  this.noteTodo=false;
  
  
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





}
