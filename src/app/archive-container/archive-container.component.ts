import { Component, Input, OnInit } from '@angular/core';
import { FundooAppService } from '../service/fundoo-app.service';
import { ActivatedRoute } from '@angular/router';
import { Notes } from '../models/user.model';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {

  constructor(private service:FundooAppService, private activeRoute:ActivatedRoute) { }

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
      console.log(resp[0].isArchive)

      console.log(this.usersPrint[0].isArchive+"from Get method")
    });
  }



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


  
//@Input() notes:any;



}
