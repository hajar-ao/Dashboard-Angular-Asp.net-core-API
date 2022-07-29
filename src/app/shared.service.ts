import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:44395/api";

  constructor(private http:HttpClient){}
  
  opportunities():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/posts');
  }
}
