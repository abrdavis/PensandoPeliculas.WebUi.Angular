import { Injectable } from '@angular/core';
import { HomePageViewModel } from '../../models/homePageViewModel';
import { ApiService } from '../api/api-service.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {
  private baseUrl = environment.apiUrl;
  constructor(private apiService :ApiService ) {

   }


  getHomePageViewModel() : Observable<HomePageViewModel> {
      return  this.apiService.get<HomePageViewModel>(`${environment.apiUrl}/Review/GetForHomePage`).pipe(res => {   
        return res;
      });
  }

}
