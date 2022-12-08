import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private url = 'https://randomuser.me/api/?results=10';
   
  constructor(private httpClient: HttpClient) { }
  
  getUsers(){
    return this.httpClient.get(this.url);
  }
  
}