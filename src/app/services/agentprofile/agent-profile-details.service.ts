import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentProfileDetailsService {
  
  constructor(private httpClient: HttpClient) { }


  agentprofileDetails(requestType: any): Observable<any> {
    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.get(environment.blissApiHost +'/agent/find-agent?' + 'id=' + requestType , {
      headers: myheaders,
    }
    )
  }
  getAllAgents(): Observable<any> {
    const myheaders = new HttpHeaders().set('Content-Type', 'application/json')
    return this.httpClient.get(environment.blissApiHost +'/agent/find-all-agent', {
      headers: myheaders,
    }
    )
  }
}
