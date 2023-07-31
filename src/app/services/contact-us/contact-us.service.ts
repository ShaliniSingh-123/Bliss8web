import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  

  constructor(private httpClient: HttpClient) { }

  sendMail(request : any): Observable<any> {
    //const headerOption = 
    return this.httpClient.post(environment.blissApiHost+'/send-email/send-email',
    request, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text' 
   }).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.error.message || "Server Error");
  }
}
