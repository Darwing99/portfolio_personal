import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http: HttpClient) { }

  url = "https://dev.to/api/articles/me";



  getBlog(): Observable<any> {

    const URL = this.url;
    const header = new HttpHeaders()
    .set('api-key', 'amJpa2V8eRNuncDGXnVADwVE')
    .set('accept', 'application/vnd.forem.api-v1+json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    .set('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    // header.append('api-key','amJpa2V8eRNuncDGXnVADwVE');
    // header.append('accept','application/vnd.forem.api-v1+json');
    // header.append('Access-Control-Allow-Origin','*');
    // header.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    // header.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');


    return this.http.get(URL, { headers: header });
  }

}
