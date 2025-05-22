import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) 
  { 
  }

  login(userName: string, password : string) : Observable<any>{
    return this.apiService.post<any>(`${environment.apiUrl}/User/Login`, {username: userName, password: password}, { 
      withCredentials: true 
    }).pipe(res => {   
      return res;
    });
  }

   logout(): Observable<any> {
    localStorage.removeItem('user');
    return this.apiService.get<any>(`${environment.apiUrl}/User/Logout`, {
      withCredentials: true
    }).pipe(res => {
      return res;
    });
  }

  isLoggedIn(){
    let isLoggedIn =  !localStorage.getItem('user') ? false : true;
    return isLoggedIn;
  }
}
