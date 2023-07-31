import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogNewsService {


  address = environment.blissApiHost
  constructor(private httpClient: HttpClient) { }
  blogNews(request: any): Observable<any> {
    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.post(this.address + '/master/pages-blogs', request, {
      headers: myheaders
    }
    ).pipe(catchError(this.errorHandler))
  }
  blogDetails(request: any): Observable<any> {
    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.get(this.address + '/master/find-blog?id=' + request, {
      headers: myheaders
    }
    ).pipe(catchError(this.errorHandler))
  }
  categories(): Observable<any> {
    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.get(this.address + '/master/distinct-blog-categories', {
      headers: myheaders
    }
    ).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.error.message || "Server Error");
  }
}
