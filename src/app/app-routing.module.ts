import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetEmailComponent } from './forget-email/forget-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'; 
import { CreateAccountComponent } from './create-account/create-account.component';
import { NotesComponent } from './notes/notes.component';
import { ChatsystemComponent } from './chatsystem/chatsystem.component';
import { AuthGuard } from './auth/auth.guard';

import { NotesUIMainComponent } from './notes-uimain/notes-uimain.component';
import { DashBoardContainerComponent } from './dash-board-container/dash-board-container.component';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { TrashContainerComponent } from './trash-container/trash-container.component';
import { NoteNewContainerComponent } from './note-new-container/note-new-container.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: "forget-email", component:ForgetEmailComponent},
  {path : "reset_password", component:ResetPasswordComponent},
  {path:"create-account", component:CreateAccountComponent},
  {path:"chat", component:ChatsystemComponent},
  {path:'notesUI', component:NotesUIMainComponent},
  {path:'dashboard', component:DashBoardContainerComponent, children:[
    {path:'notes-component', component:NoteNewContainerComponent},
    {path:'archive-component', component:ArchiveContainerComponent},
    {path:'trash-component', component:TrashContainerComponent},
  ]},
  
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
