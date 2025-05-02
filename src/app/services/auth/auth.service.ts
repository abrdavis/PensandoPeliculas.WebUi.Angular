import { Injectable } from '@angular/core';
import { ApiService } from '../api/api-service.service';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';

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
}
