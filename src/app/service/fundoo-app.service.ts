import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notes, User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  // it helps us dependency injection
export class FundooAppService {

  user:any={
    id:'',
    first_name:'',
    last_Name:'',
    email:'',
    token:''
  }

  resetObj={
    email:'',
    newPassword:'',
    confirmPassword:''
  }

  readonly ApiUrl="https://localhost:7133/api/User";
  readonly NotesApiUrl="https://localhost:7133/api/Notes";

  constructor(private http:HttpClient){
  }

  refreshUser(): Observable<User[]>{
      return  this.http.get<User[]>(this.ApiUrl+'/GetAll');
  }

  loginUser(data : any):Observable<any>{
    return this.http.post(this.ApiUrl+'/Login', data);
  }

  registerUser(data2:any): Observable<any>{
    return this.http.post(this.ApiUrl+'/Create', data2);
  }

  resetPassword(data3:any):Observable<any>{
    debugger
    return this.http.post(this.ApiUrl+'/ResetPassword', data3);
  }

  getAllNotes(id:any): Observable<Notes[]>{
    return  this.http.get<Notes[]>(this.NotesApiUrl+`/GetAllNotesById?Id=${id}`);
  }

  AccessUserAllPlace(){
    return this.user;
  }

  createNote(data4:any):Observable<any>{
    return this.http.post(this.NotesApiUrl+'/CreateNote', data4);
  }

  createNoteOld(data4:any):Observable<any>{
    debugger;
    return this.http.post(this.NotesApiUrl+'/Create', data4);
  }

  deleteNoteById(Id:any):Observable<any>{
    return this.http.delete(this.NotesApiUrl+`/DeleteById?Id=${Id}`)
  }

  archiveNotes(Id:any):Observable<any>{
    debugger;
    return this.http.put(this.NotesApiUrl+`/ToggleArchive?noteId=${Id}`,{}, {
      responseType:'text'
    })
  }

  trashNoteById(Id:any):Observable<any>{
    return this.http.put(this.NotesApiUrl+`/ToggleTrash?noteId=${Id}`, {}, {responseType:'text'})
  }

  updateNotes(data5:any):Observable<any>{
    debugger
    return this.http.put(this.NotesApiUrl+`/UpdateAngular`, data5)
  }

  addColor(data6:any):Observable<any>{
    return this.http.put(this.NotesApiUrl+`/AddColor`, data6, {responseType:'text'})
  }

}
