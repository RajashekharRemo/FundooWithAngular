import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FundooAppService } from '../service/fundoo-app.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor( private services:FundooAppService, private route:Router) { }

  ngOnInit(): void {
  }


  @Output() colorChange=new EventEmitter<string>();

  addColors($e:any){
    //console.log(e);
    //this.color=$e;
    this.colorChange.emit($e);

    
  }


  colorTodo=false;
  callColors(){
    this.colorTodo=!this.colorTodo;
    
  }


  @Input() NoteId:any;
  

  @Input() createNoteDiv:any;
  more=false;
  moreNoteDiv=false;
  toggleMore(){
    this.more=!this.more;
    if(this.createNoteDiv===1){
      this.moreNoteDiv=!this.moreNoteDiv;
      this.more=false;
    }
    
  }


  @Output() toggleArchive=new EventEmitter<any>()
  archive(){
    this.services.archiveNotes(this.NoteId).subscribe(res=>{
      console.log(res);
      console.log(this.NoteId);
      //this.route.navigate(['notes'], {queryParams:this.user});
      //this.notes.ngOnInit();
      //this.ngOnInit();
      this.toggleArchive.emit(this.NoteId);

    })
  }

  @Output() toggleTrash=new EventEmitter<any>()
  trashNoteById(){
    this.services.trashNoteById(this.NoteId).subscribe(res=>{
      console.log(res);
      this.toggleTrash.emit(this.NoteId);
    })
    //console.log(this.noteId)
  }

}
