import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PropertyMapService {
  address = environment.blissApiHost
  constructor(private httpClient: HttpClient) { }
  propertyMapView(request: any): Observable<any> {
    console.log(request);

    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    // let body = new HttpParams();
    // body = body.set('filters' , request)
    return this.httpClient.post(this.address+'/property/find-properties' , request,  {
      headers: myheaders
    }
    ).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.error.message || "Server Error");
  }
}
