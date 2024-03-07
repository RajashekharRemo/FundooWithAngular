import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetEmailComponent } from './forget-email/forget-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'; 
import { CreateAccountComponent } from './create-account/create-account.component';
import { NotesComponent } from './notes/notes.component';
import { ChatsystemComponent } from './chatsystem/chatsystem.component';
import { AuthGuard } from './auth/auth.guard';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
import { NotesUIMainComponent } from './notes-uimain/notes-uimain.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: "forget-email", component:ForgetEmailComponent},
  {path : "reset_password", component:ResetPasswordComponent},
  {path:"create-account", component:CreateAccountComponent},
  {path: "notes", component:NotesComponent, canActivate:[AuthGuard]},
  {path:"chat", component:ChatsystemComponent},
  {path:'archive', component:ArchiveComponent},
  {path:'notesUI', component:NotesUIMainComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
