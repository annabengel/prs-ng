import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request.class';
import { User } from '@model/user.class';
import { PrService } from '@svc/pr.service';
import { SystemService } from '@svc/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pr-review',
  templateUrl: './pr-review.component.html',
  styleUrls: ['./pr-review.component.css']
})
export class PrReviewComponent implements OnInit {
  jr: JsonResponse;
  requests:PurchaseRequest[];
  title: string = 'Purchase Request Review';
  request: PurchaseRequest;
  user: User;
  
  constructor(private PrSvc: PrService,
              private sysSvc: SystemService,
              private router: Router) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn) {
      this.user = this.sysSvc.data.user.instance;
    } else {
      console.error("User not logged in.");
    }
    this.PrSvc.listReview(this.user.id).subscribe(
      jresp => {
        this.jr = jresp;
        this.requests = this.jr.data as PurchaseRequest[];
      });

}
}
