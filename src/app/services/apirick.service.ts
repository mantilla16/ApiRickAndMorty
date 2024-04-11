import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApirickService {
  api_url: string = 'https://rickandmortyapi.com/api/character';
  constructor(private httpClient: HttpClient) { }
  
  getCharacters(page: number): Observable<any> {
    return this.httpClient.get(`${this.api_url}/?page=${page}`).pipe(res=> res);
  }
}
