import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactAgentService {
address = environment.blissApiHost
  constructor(private httpClient: HttpClient) { }

  sendMessage(request : any): Observable<any> {
    return this.httpClient.post(this.address+"/save-msg",
    request, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
   }).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.error.message || "Server Error");
  }
}
