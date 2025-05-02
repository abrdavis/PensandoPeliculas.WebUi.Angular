import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api-service.service';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private apiService :ApiService) { }

  checkAuth(){
    this.apiService.get(`${environment.apiUrl}/Admin/AuthCheck`, {
      withCredentials: true
    }).subscribe(res => {

    })
  }
}
