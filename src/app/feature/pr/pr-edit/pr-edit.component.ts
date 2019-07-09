import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request.class';
import { PrService } from '@svc/pr.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-edit',
  templateUrl: './pr-edit.component.html',
  styleUrls: ['./pr-edit.component.css']
})
export class PrEditComponent implements OnInit {
  title: string = 'Purchase Request Edit';
  jr: JsonResponse;
  request: PurchaseRequest;
  prIdStr: string;
 

  constructor(private PrSvc: PrService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => 
      this.prIdStr = params["id"]);
    this.PrSvc.get(this.prIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.request = this.jr.data as PurchaseRequest;
    });
  }

  edit() {
    this.PrSvc.edit(this.request).subscribe(jresp => {
      this.jr = jresp;
      this.router.navigate(['/pr/list']);
    });
  }

}
