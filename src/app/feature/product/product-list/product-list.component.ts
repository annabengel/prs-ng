import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { Product } from '@model/product.class';
import { ProductService } from '@svc/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  jr: JsonResponse;
  products:Product[];
  title: string = 'Product-List';
  sortCriteria: string = "id";
  sortOrder: string = "asc"; // or anything else for desc

  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        if (this.jr.errors == null) {
        this.products = this.jr.data as Product[];
        console.log(this.products);
        } else {
          console.log("Error getting products.");
          //To Do: implement error handling? (optional/if problem occurs)
        }
      }
    )
  }

  sortBy(column: string): void {
    if(this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}
