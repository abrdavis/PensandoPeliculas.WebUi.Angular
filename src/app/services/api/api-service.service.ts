import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpClient = inject(HttpClient);
  constructor() { }

  get<T>(url: string, options?: { headers?: HttpHeaders }): Observable<T> {
    return this.httpClient.get<T>(url, options);
  }

  post<T>(url: string, data: any, options?: { headers?: HttpHeaders, withCredentials?: boolean }): Observable<T> {
    return this.httpClient.post<T>(url,data, options);
  }
}
