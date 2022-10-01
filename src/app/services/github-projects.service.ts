import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubProjectsService {

  constructor(private http: HttpClient) { }

  url= 'https://api.github.com/users/darwing99/repos';
  //https://api.github.com/users/darwing99

  getProject():Observable<any>{
    
     const URL=this.url;
     return this.http.get(URL);
  }
}
