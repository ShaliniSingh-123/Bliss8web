import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertySearchService {

  constructor(private httpClient: HttpClient) { }

  propertySearch(request: any): Observable<any> {
    console.log(request);

    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    // let body = new HttpParams();
    // body = body.set('filters' , request)
    console.log(environment.blissApiHost+'/property/find-properties' , request)
    return this.httpClient.post(environment.blissApiHost+'/property/find-properties' , request,  {
      headers: myheaders
    }
    ).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.error.message || "Server Error");
  }
}
