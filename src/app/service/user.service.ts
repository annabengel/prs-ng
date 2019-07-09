import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { HttpClient } from '@angular/common/http';
import { User } from '@model/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/users/";

  constructor(private http: HttpClient) {
   }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  create(user: User): Observable<JsonResponse> {
    console.log("usersvc.create...");
    return this.http.post(this.url, user) as Observable<JsonResponse>;
  }

  get(userId: number): Observable<JsonResponse> {
    console.log("usersvc.get...");
    return this.http.get(this.url+userId) as Observable<JsonResponse>;
  }

  edit(user: User): Observable<JsonResponse> {
    console.log("usersvc.edit...");
    return this.http.put(this.url, user) as Observable<JsonResponse>;
  }

  remove(user: User): Observable<JsonResponse> {
    console.log("usersvc.delete...");
    return this.http.delete(this.url+user.id) as Observable<JsonResponse>;
  }

  login(user: User): Observable<JsonResponse> {
    return this.http.post(this.url+"/authenticate", user) as Observable<JsonResponse>;
  }
    
}
