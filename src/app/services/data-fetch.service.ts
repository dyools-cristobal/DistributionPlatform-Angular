import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  _dataUrl = 'assets/data/quotes.json';
  _policiesDataUrl = 'assets/data/policies.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this._dataUrl);
  }

  getPoliciesData(): Observable<any> {
    return this.http.get<any>(this._policiesDataUrl);
  }
}
