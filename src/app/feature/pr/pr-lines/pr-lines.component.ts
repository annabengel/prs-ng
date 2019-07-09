import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request.class';
import { PrService } from '@svc/pr.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineService } from '@svc/purchase-request-line.service';
import { PurchaseRequestLine } from '@model/purchase-request-line-class';

@Component({
  selector: 'app-pr-lines',
  templateUrl: './pr-lines.component.html',
  styleUrls: ['./pr-lines.component.css']
})
export class PrLinesComponent implements OnInit {
  title1: string = 'Purchase Request Line Items';
  title2: string = 'Lines';
  jr: JsonResponse;
  jr2: JsonResponse;
  request: PurchaseRequest;
  prlis: PurchaseRequestLine[];
  prIdStr: string;
  prliIdStr: string;
  prli: PurchaseRequestLine;

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

  remove(prli) {
    this.prliSvc.remove(prli).subscribe(jresp => {
      this.jr = jresp;
      this.prli = this.jr.data as PurchaseRequestLine;
      this.refresh();
    });

  }

  refresh() {
    this.prSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.request = this.jr.data as PurchaseRequest;
  });
    
    this.prliSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.prlis = this.jr.data as PurchaseRequestLine[];
    });
  }

  review() {
    this.prSvc.review(this.request).subscribe(
      jresp => {
        this.jr = jresp;
        this.router.navigate(['/pr/list']);
      });
  }
  

}


