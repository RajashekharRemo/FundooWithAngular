import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatLabelModule} from '@angular/material/label';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ForgetEmailComponent } from './forget-email/forget-email.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';


import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateAccountComponent } from './create-account/create-account.component';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { NotesComponent } from './notes/notes.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatsystemComponent } from './chatsystem/chatsystem.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileDialogComponent } from './DialogBoxes/profile-dialog/profile-dialog.component';
import { NotesiconsComponent } from './notesicons/notesicons.component';
import { NoteCardsComponent } from './note-cards/note-cards.component';
import { CustomeInterceptorInterceptor } from './service/custome-interceptor.interceptor';
import { FundooAppService } from './service/fundoo-app.service';
import { NotesUIMainComponent } from './notes-uimain/notes-uimain.component';
import { DashBoardContainerComponent } from './dash-board-container/dash-board-container.component';
import { TrashContainerComponent } from './trash-container/trash-container.component';
import { ArchiveContainerComponent } from './archive-container/archive-container.component';
import { NoteNewContainerComponent } from './note-new-container/note-new-container.component';
import { IconsComponent } from './icons/icons.component';
import { EditContainerComponent } from './edit-container/edit-container.component';
import { CardAndIconsComponent } from './card-and-icons/card-and-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetEmailComponent,
    ResetPasswordComponent,
    CreateAccountComponent,
    NotesComponent,
    ChatsystemComponent,
    ProfileDialogComponent,
    NotesiconsComponent,
    NoteCardsComponent,
    NotesUIMainComponent,
    DashBoardContainerComponent,
    TrashContainerComponent,
    ArchiveContainerComponent,
    NoteNewContainerComponent,
    IconsComponent,
    EditContainerComponent,
    CardAndIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule

  ],
  providers: [AuthGuard, {
    provide:HTTP_INTERCEPTORS,
    useClass: CustomeInterceptorInterceptor,
    multi:true
  }, FundooAppService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
