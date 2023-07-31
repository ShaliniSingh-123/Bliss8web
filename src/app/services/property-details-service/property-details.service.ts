import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {
  constructor(private httpClient: HttpClient) { }
  propertyDetails(requestType: any): Observable<any> {
    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.get(environment.blissApiHost + '/property/find-property?' + 'id=' + requestType, {
      headers: myheaders,
    })
  }

}
