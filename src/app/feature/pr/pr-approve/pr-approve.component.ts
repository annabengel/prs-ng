import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request.class';
import { PurchaseRequestLine } from '@model/purchase-request-line-class';
import { PrService } from '@svc/pr.service';
import { PurchaseRequestLineService } from '@svc/purchase-request-line.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-approve',
  templateUrl: './pr-approve.component.html',
  styleUrls: ['./pr-approve.component.css']
})
export class PrApproveComponent implements OnInit {
  title1: string = 'Purchase Request Approve/Reject';
  title2: string = 'Lines';
  prIdStr: string;
  jr: JsonResponse;
  request: PurchaseRequest;
  prlis: PurchaseRequestLine[];
  message: string = '';

  constructor(private prSvc: PrService,
              private prliSvc: PurchaseRequestLineService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => 
      this.prIdStr = params["id"]);

    this.prSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.request = this.jr.data as PurchaseRequest;
  });
    
    this.prliSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.prlis = this.jr.data as PurchaseRequestLine[];
    });
  }

  approve(){
    this.prSvc.approve(this.request).subscribe(
      jresp => {
        this.jr = jresp;
        this.router.navigate(['/pr/review']);
      });
  }

  reject(){
    this.prSvc.reject(this.request).subscribe(
      jresp => {
        this.jr = jresp;
          this.router.navigateByUrl('/pr/review');
      });
  }
}
