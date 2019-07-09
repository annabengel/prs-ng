import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequestLine } from '@model/purchase-request-line-class';
import { PurchaseRequestLineService } from '@svc/purchase-request-line.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '@model/purchase-request.class';
import { ProductService } from '@svc/product.service';
import { Product } from '@model/product.class';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})
export class PrliEditComponent implements OnInit {
  title: string;
  jr: JsonResponse;
  prli:PurchaseRequestLine;
  prliIdStr: string;
  products: Product[]; 

  constructor(private prliSvc: PurchaseRequestLineService, 
              private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        console.log(this.jr);
        this.products = this.jr.data as Product[];
      });
      this.route.params.subscribe(params => 
        this.prliIdStr = params['id']);
        this.prliSvc.getId(this.prliIdStr).subscribe(jresp => {
          this.jr = jresp;
          console.log(this.jr);
          this.prli = this.jr.data as PurchaseRequestLine;
          console.log(this.prli);
          this.title= "Purchase Request Line Item Edit - PR ID" + (this.prli.purchaseRequest.id);
        });

    }

  edit() {
    this.prliSvc.edit(this.prli).subscribe(jresp => {
      this.jr = jresp;
      this.prli = this.jr.data as PurchaseRequestLine;
      this.router.navigate(['/pr/lines/' + this.prli.purchaseRequest.id]);
    });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}
