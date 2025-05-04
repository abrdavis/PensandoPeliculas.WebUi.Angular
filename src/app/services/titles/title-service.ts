import { Injectable } from '@angular/core';
import { HomePageViewModel } from '../../models/homePageViewModel';
import { ApiService } from '../api/api-service.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private baseUrl = environment.apiUrl;
  constructor(private apiService :ApiService ) {

   }


  insertTitle(titleDuration: number,
    titleName: string,
    genreId: number,
    releaseDate: Date,
    titlePoster: File
  ) : Observable<any> {
    const requestData = {
        titleName: titleName,
        releaseDate: releaseDate,
        titleImage: titlePoster,
        genre : genreId,
        durationMinutes : titleDuration
    }
      return  this.apiService.post<any>(`${environment.apiUrl}/Title/InsertTitle`, requestData,  {withCredentials: true }).pipe(res => {   
        return res;
      });
  }

}
