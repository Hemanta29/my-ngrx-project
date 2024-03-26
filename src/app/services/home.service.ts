import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  _baseURL = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getDog(): Observable<any> {
    return this.http.get(this._baseURL);
  }
}
