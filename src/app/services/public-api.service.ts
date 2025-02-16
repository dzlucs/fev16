//ID18. Requisições assíncronas API pública

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {
  private apiUrl = 'https://api.publicapis.org/entries';

  constructor(private http: HttpClient) {}

  //ID24. Observables
  getPublicData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}