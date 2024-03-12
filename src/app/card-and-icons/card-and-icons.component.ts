import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FundooAppService } from '../service/fundoo-app.service';
import { EditContainerComponent } from '../edit-container/edit-container.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-and-icons',
  templateUrl: './card-and-icons.component.html',
  styleUrls: ['./card-and-icons.component.scss']
})
export class CardAndIconsComponent implements OnInit, OnChanges {

  constructor(private services:FundooAppService, private matDialog:MatDialog) { }

  ngOnInit(): void {
  }


  @Input() Notes:any;

  colorTodo=false;
  callColors(){
    this.colorTodo=!this.colorTodo;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  

  @Output() colorChange=new EventEmitter<string>();

  addColors($e:any){
    //console.log(e);
    //this.color=$e;
    this.colorChange.emit($e);
    this.Notes.color=$e;
    this.colorTodo=!this.colorTodo;
    
  }


  more=false;
  toggleMore(){
    this.more=!this.more;
    
  }


  @Output() toggleArchive=new EventEmitter<any>()
  archive(){
    debugger
    this.services.archiveNotes(this.Notes.id).subscribe(res=>{
      console.log(res);
      this.toggleArchive.emit(this.Notes.id);
    })
  }

  @Output() toggleTrash=new EventEmitter<any>()
  
  trashNoteById(){
    debugger
    this.services.trashNoteById(this.Notes.id).subscribe(res=>{
      console.log(res);
      this.toggleTrash.emit(this.Notes.id);
    })
    //console.log(this.noteId)
  }
  




  @Output() updateNotes=new EventEmitter<any>()

  
  notesIncrease(notes:any){

    
    const dialogRef=this.matDialog.open(EditContainerComponent, {width:'560px', data:notes, panelClass: 'custom-modalbox'});
    dialogRef.afterClosed().subscribe(resp => {
      console.log('The dialog was closed');
      
      // var res=this.usersPrint.filter(obj => obj.id === Notes.id );
      // console.log(res);

      this.updateNotes.emit(this.Notes)
      

      // const obj = Object.assign({}, ...res);
      //console.log("==============");
      
      // this.UpdatedNotes.id=obj.id;
      // this.UpdatedNotes.title=obj.title;
      // this.UpdatedNotes.description=obj.description;
      // this.UpdatedNotes.color=obj.color;

      // this.services.updateNotes(this.UpdatedNotes).subscribe(res=>{
      //   console.log(res);

        
      // })
      //console.log(this.UpdatedNotes);
      //console.log("Updated notes");
      
      
      
    });

  }


}
