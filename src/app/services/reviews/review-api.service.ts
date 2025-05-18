import { Injectable } from '@angular/core';
import { HomePageViewModel } from '../../models/homePageViewModel';
import { ApiService } from '../api/api-service.service';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Review } from '../../models/reviewModel';

@Injectable({
  providedIn: 'root'
})
export class ReviewApiService {
  private baseUrl = environment.apiUrl;
  constructor(private apiService :ApiService ) {

   }

   getReviewForId(reviewId: number) : Observable<Review>{
    return this.apiService.get<any>(`${environment.apiUrl}/Review/Get?reviewId=${reviewId}`, {withCredentials: true }).pipe(map((response) =>
                response.reviewModel
              ));
   }

  getHomePageViewModel() : Observable<HomePageViewModel> {
      return  this.apiService.get<HomePageViewModel>(`${environment.apiUrl}/Review/GetForHomePage`).pipe(res => {   
        return res;
      });
  }

}
