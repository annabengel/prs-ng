import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { Product } from '@model/product.class';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = 'Product Detail';
  jr: JsonResponse;
  product: Product; 
  pdtIdStr: string;

  constructor(private pdtSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.pdtIdStr = params["id"]);
    this.pdtSvc.get(this.pdtIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.product = this.jr.data as Product;
    });
  }

  remove() {
    this.pdtSvc.remove(this.product).subscribe(jresp => {
      this.jr = jresp;
      this.product = this.jr.data as Product;
      this.router.navigate(['/product/list']);
    });
  }

}
