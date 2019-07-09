import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request.class';
import { PrService } from '@svc/pr.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PrDetailComponent implements OnInit {
  title: string = 'Purchase Request Detail';
  jr: JsonResponse;
  request: PurchaseRequest;
  prIdStr: string;

  constructor(private prSvc: PrService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => 
      this.prIdStr = params["id"]);
    this.prSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.request = this.jr.data as PurchaseRequest;
    });
  }

  remove() {
    this.prSvc.remove(this.request).subscribe(jresp => {
      this.jr = jresp;
      this.request = this.jr.data as PurchaseRequest;
      this.router.navigate(['/pr/list']);
    });
  }

}
