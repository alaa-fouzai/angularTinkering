import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http:HttpClient) { }

  public getid(): Observable<any> {
    const headers = { 'My-Custom-Header': 'foobar' };
    console.log(headers);
    return this.http.get('https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts')
  }
}
