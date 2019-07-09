import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { Vendor } from '@model/vendor.class';
import { VendorService } from '@svc/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  jr: JsonResponse;
  vendors:Vendor[];
  title: string = 'Vendor List';

  constructor(private VendorSvc: VendorService) { }

  ngOnInit() {
    this.VendorSvc.list().subscribe(
      jresp => {
        this.jr = jresp;
        if (this.jr.errors == null) {
        this.vendors = this.jr.data as Vendor[];
        console.log(this.vendors);
        } else {
          console.log("Error getting vendors.");
          //To Do: implement error handling? (optional/if problem occurs)
        }
      }
    )
  }

}
