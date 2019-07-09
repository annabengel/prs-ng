import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequestLine } from '@model/purchase-request-line-class';
import { PurchaseRequest } from '@model/purchase-request.class';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestLineService {

  url: string = "http://localhost:8080/purchase-request-line-items/"

  constructor(private http: HttpClient) { }

    
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
  
  create(prli: PurchaseRequestLine): Observable<JsonResponse> {
    return this.http.post(this.url, prli) as Observable<JsonResponse>;
  }

  get(prId: string): Observable<JsonResponse> {
    return this.http.get(this.url+"lines-for-pr/"+prId) as Observable<JsonResponse>;
  }

  getId(prliId: string): Observable<JsonResponse> {
    return this.http.get(this.url+ prliId) as Observable<JsonResponse>;
  }

  edit(prli: PurchaseRequestLine): Observable<JsonResponse> {
    return this.http.put(this.url, prli) as Observable<JsonResponse>;
  }

  remove(prli: PurchaseRequestLine): Observable<JsonResponse> {
    return this.http.delete(this.url+prli.id) as Observable<JsonResponse>;
  }
}

