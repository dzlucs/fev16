import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007';

  constructor(private http: HttpClient) {}

  // Busca drinks por nome
  searchDrinksByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.php?s=${name}`);
  }

  // Busca detalhes de um drink por ID
  getDrinkDetailsById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/lookup.php?i=${id}`);
  }
}