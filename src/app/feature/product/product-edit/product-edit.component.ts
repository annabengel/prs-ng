import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { Product } from '@model/product.class';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '@svc/vendor.service';
import { Vendor } from '@model/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product Edit';
  jr: JsonResponse;
  product: Product;
  productIdStr: string;
  vendors: Vendor[];

  constructor(private PdtSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get product from DB
    this.route.params.subscribe(params => this.productIdStr = params["id"]);
    this.PdtSvc.get(this.productIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.product = this.jr.data as Product;
    });
    this.vendorSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        this.vendors = this.jr.data as Vendor[];
      });
  }

  edit() {
    this.PdtSvc.edit(this.product).subscribe(jresp => {
      this.jr = jresp;
      this.router.navigate(['/product/list']);
    });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}
