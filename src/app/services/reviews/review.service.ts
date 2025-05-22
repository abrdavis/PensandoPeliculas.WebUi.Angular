import { Injectable } from '@angular/core';
import { HomePageViewModel } from '../../models/home-page.model';
import { ApiService } from '../api/api.service';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Review } from '../../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
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

  updateReview(reviewId: number,
    titleId: number,
    reviewRating: number,
    reviewText: string,
    reviewTitle: string,
    headerImgUrl: string) : Observable<any>{
            return  this.apiService.get<HomePageViewModel>(`${environment.apiUrl}/Review/GetForHomePage`).pipe(res => {   
        return res;
      });
    }
  

}
