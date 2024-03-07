import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { FundooAppService } from 'src/app/service/fundoo-app.service';


@Component({
  selector: 'app-notesicons',
  templateUrl: './notesicons.component.html',
  styleUrls: ['./notesicons.component.scss']
})
export class NotesiconsComponent implements OnInit {

  constructor(private notes:NotesComponent, private services:FundooAppService) { }

  ngOnInit(): void {
  }

@Output() colorChange=new EventEmitter<string>();

@Input() noteId:any;
@Input() createNoteDiv:any;

  colorTodo=false;
  callColors(){
    this.colorTodo=!this.colorTodo;
    
  }

  color='';


  addColors($e:any){
    //console.log(e);
    this.color=$e;
    this.colorChange.emit($e);

    
  }

  imageUpload($event:any){

  }

  more=false;
  moreNoteDiv=false;
  toggleMore(){
    this.more=!this.more;
    if(this.createNoteDiv===1){
      this.moreNoteDiv=!this.moreNoteDiv;
      this.more=false;
    }
    
  }


  deleteNote(){
    this.services.deleteNoteById(this.noteId).subscribe(res=>{
      console.log(res);
      this.notes.ngOnInit();
    })
    //console.log(this.noteId)
  }

}
