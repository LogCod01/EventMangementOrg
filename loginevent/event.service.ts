import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 
  private loginStatus: boolean;
  constructor(private httpClient : HttpClient) { 
    this.loginStatus = false;
  }
  getLoginStatus(){
    return this.loginStatus;
  }
  
  setLoginStatus(){
    this.loginStatus = true;
  }
  registerUser(user: any){
    return this.httpClient.post('registerUser',user)
  }
  registerEvent(event: any){
    return this.httpClient.post('registerEvent',event)
  }
  getAllUsers(){
    return this.httpClient.get('getAllUsers')
  }
  getAllEvents(){
    return this.httpClient.get('getAllEvents')
  }cancelEvent(eventId:number){
    return this.httpClient.delete('cancelEvent/'+ eventId);
  }
  
}
