import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { 
    
  }

  // getdata()
  // {
  //   let url="http://localhost:9001/bliss/master/all-active-partners/";
  //   return this.http.get(url);
  // }

  public getActivePartner(): Observable<any> {
    return this.http.get(environment.blissApiHost + '/master/all-active-partners').pipe(map(res => res));
  }

  public getActiveAgent(): Observable<any> {
    return this.http.get(environment.blissApiHost + '/agent/find-all-agent').pipe(map(res => res));
  }

  public getActiveblog(): Observable<any> {
    return this.http.get(environment.blissApiHost + '/master/pages-blogs').pipe(map(res => res));
  }

  public getPopLocations(): Observable<any> {
    return this.http.get(environment.blissApiHost + '/master/pop-location-property-count').pipe(map(res => res));
  }


}
