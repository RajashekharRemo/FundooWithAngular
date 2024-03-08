import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NotesComponent } from '../notes/notes.component';
import { FundooAppService } from 'src/app/service/fundoo-app.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-notesicons',
  templateUrl: './notesicons.component.html',
  styleUrls: ['./notesicons.component.scss']
})
export class NotesiconsComponent implements OnInit {


  user:any={
    id:'',
    first_name:'',
    last_Name:'',
    email:'',
    token:''
  }

  constructor(private notes:NotesComponent, private services:FundooAppService, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
  }

@Output() colorChange=new EventEmitter<string>();
//@Output() callParent=new EventEmitter<string>();

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


  trashNoteById(){
    this.services.trashNoteById(this.noteId).subscribe(res=>{
      console.log(res);
      //this.notes.ngOnInit();
    })
    //console.log(this.noteId)
  }

  archive($e:any){
    this.services.archiveNotes(this.noteId).subscribe(res=>{
      console.log(res);
      //this.route.navigate(['notes'], {queryParams:this.user});
      //this.notes.ngOnInit();
      //this.ngOnInit();
      //this.callParent.emit($e);

    })
  }

}
