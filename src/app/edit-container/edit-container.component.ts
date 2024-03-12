import { Component, EventEmitter, Inject, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Notes } from '../models/user.model';

@Component({
  selector: 'app-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class EditContainerComponent implements OnInit {



  constructor(
    public dialogRef: MatDialogRef<EditContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notes,
  ) {}

  isDisable=false;

  ngOnInit(): void {
    if(this.data.isTrash){
      this.isDisable=true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //modifiedAt:string=this.data.modifiedAt.toLocaleDateString();


  colorTodo=false;
  callColors(){
    this.colorTodo=!this.colorTodo;
    
  }

  //@Output() colorChange=new EventEmitter<string>();

  addColors($e:any){
    debugger
    //console.log(e);
    //this.color=$e;
    //this.colorChange.emit($e);
    // this.Notes.color=$e;
    this.data.color=$e
     this.colorTodo=!this.colorTodo;
    
  }

  more=false;
  toggleMore(){
    this.more=!this.more;
    
  }

}
