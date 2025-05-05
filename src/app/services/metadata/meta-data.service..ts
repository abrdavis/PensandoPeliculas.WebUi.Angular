import { Injectable } from '@angular/core';
import { ApiService } from '../api/api-service.service';
import { environment } from '../../environments/environments';
import { map, Observable } from 'rxjs';
import { Genre } from '../../models/genreModel';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  constructor(private apiService: ApiService) 
  { 


  }

  getGenres() : Observable<Genre[]>{
    return this.apiService.get<any>(`${environment.apiUrl}/MetaData/GenresGetAll`,  { 
      withCredentials: true 
    }).pipe(
      map((response) =>
        response.genres.map((item : any) => ({
          genreId: item.genreId,
          genreName: item.genreName,
        }))
      )
    );
  }

}
