import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPageContent(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}
