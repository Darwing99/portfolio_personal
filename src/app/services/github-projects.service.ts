import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubProjectsService {

  constructor(private http: HttpClient) { }

  base="https://api.github.com/users/darwing99";
  url= this.base+'/repos';
  

  getProject():Observable<any>{
    
     const URL=this.url;
     return this.http.get(URL);
  }
  getUser():Observable<any>{
    const URL=this.base;
    return this.http.get(URL);
  }
}
