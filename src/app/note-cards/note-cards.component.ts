import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';
import { FundooAppService } from '../service/fundoo-app.service';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.scss'], 
  providers:[FundooAppService]
})
export class NoteCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger
    console.log('cards calling');
    
  }

  //@Output() colorChange=new EventEmitter<string>();

@Input() notes:any;

noteTodo=false;
  notesIncrease(){
    this.noteTodo=true;
  }

  notesDecrease(){
    this.noteTodo=false;
  }

}
