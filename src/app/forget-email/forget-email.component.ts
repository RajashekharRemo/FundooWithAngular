import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-email',
  templateUrl: './forget-email.component.html',
  styleUrls: ['./forget-email.component.scss']
})
export class ForgetEmailComponent implements OnInit {

  password=false;

  constructor() { }

  ngOnInit(): void {
  }

  passwordToggle(){
    this.password=!this.password;
  }


}
