import { Component, Input, OnInit } from '@angular/core';
import { FundooAppService } from '../service/fundoo-app.service';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '../models/user.model';
import { EditContainerComponent } from '../edit-container/edit-container.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {

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
        
          if (res.isArchive) {
              return true; // Exclude this user
          }

      return false;
      })
      // console.log(resp[0].isArchive)

      // console.log(this.usersPrint[0].isArchive+"from Get method")
    });
  }



  handleArchive(note:any){
    this.usersPrint=this.usersPrint.filter(res=>res.id!=note.id )
  }


  
//@Input() notes:any;



UpdatedNotes={
  id:'',
  title:'',
  description:'',
  color:''
}

noteTodo=true;
notesIncrease($Notes:any){
  this.noteTodo=false;
  // console.log(Notes);
  // console.log(" from Increase");
  
  
  //const dialogRef=this.matDialog.open(EditContainerComponent, {width:'560px', data:Notes, panelClass: 'custom-modalbox'});
  // dialogRef.afterClosed().subscribe(resp => {
  //   console.log('The dialog was closed');
    
    var res=this.usersPrint.filter(obj => obj.id === $Notes.id );
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
    
    
    // });

  } 

  // noteTodo=true;
  // otherCardsCloseWhenEditOpen(){
  //   this.noteTodo=!this.noteTodo;
  // }






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
    this.usersPrint=this.usersPrint.filter(res=>res.isArchive==true && res.isTrash==false)

  }


}
