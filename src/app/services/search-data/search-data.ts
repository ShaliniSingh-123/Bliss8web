import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private httpClient: HttpClient) { }
  getAllLocation(){

    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    // let body = new HttpParams();
    // body = body.set('filters' , request)
    return this.httpClient.get(environment.blissApiHost+'/master/locations'
    ).pipe(catchError(this.errorHandler))
  }
  getAllAmneties(){

    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    // let body = new HttpParams();
    // body = body.set('filters' , request)
    return this.httpClient.get(environment.blissApiHost+'/master/amenities' ,   {
      headers: myheaders
    }
    ).pipe(catchError(this.errorHandler))
  }



  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.error.message || "Server Error");
  }
}
