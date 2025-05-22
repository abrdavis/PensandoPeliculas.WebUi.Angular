import { Injectable } from '@angular/core';
import { HomePageViewModel } from '../../models/home-page.model';
import { ApiService } from '../api/api.service';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Title } from '../../models/title.model';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private baseUrl = environment.apiUrl;
  constructor(private apiService :ApiService ) {

   }

   getTitlesForFilter(filterText: string) : Observable<Title[]> {
    return this.apiService.get<any>(`${environment.apiUrl}/Title/GetTitlesFilterByName?filterText=${filterText}`, {withCredentials:true}).pipe(
          map((response) =>
            response.titles.map((item : any) => ({
              titleId: item.titleId,
              titleName: item.titleName,
              posterUrl: item.posterUrl,
              posterThumbnailUrl: item.posterThumbnailUrl
            }))
          )
        );
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
