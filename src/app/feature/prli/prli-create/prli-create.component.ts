import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequestLine } from '@model/purchase-request-line-class';
import { Product } from '@model/product.class';
import { PurchaseRequestLineService } from '@svc/purchase-request-line.service';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PrService } from '@svc/pr.service';
import { PurchaseRequest } from '@model/purchase-request.class';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {
  title: string = "Purchase Request Line Item Create - PR ID: ";
  jr: JsonResponse;
  prli:PurchaseRequestLine = new PurchaseRequestLine();
  products: Product[];
  request: PurchaseRequest = new PurchaseRequest();
  prIdStr: string;

  constructor(private prliSvc: PurchaseRequestLineService, 
              private productSvc: ProductService, 
              private prSvc: PrService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productSvc.list().subscribe(
      jresp => {
        this.jr=jresp;
        this.products = this.jr.data as Product[];
      });

      this.route.params.subscribe(params => 
        this.prIdStr = params["id"]);
      this.prSvc.get(this.prIdStr).subscribe(jresp => {
        this.jr = jresp;
        this.request = this.jr.data as PurchaseRequest;
        this.prli.purchaseRequest = this.request;
        this.title = "Purchase Request Line Item Create - PR ID: " + this.request.id;
      });


  }

  create() {
    this.prliSvc.create(this.prli).subscribe(
      jresp => {
        this.jr = jresp;
        this.router.navigate(['/pr/lines/' + this.request.id]);
      });
  }

}
