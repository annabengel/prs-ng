import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { Vendor } from '@model/vendor.class';
import { VendorService } from '@svc/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title: string = 'Vendor Edit';
  jr: JsonResponse;
  vendor: Vendor;
  vendorIdStr: string;

  constructor(private VendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get vendor from DB
    this.route.params.subscribe(params => this.vendorIdStr = params["id"]);
    this.VendorSvc.get(this.vendorIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.vendor = this.jr.data as Vendor;
    });

  }

  edit() {
    this.VendorSvc.edit(this.vendor).subscribe(jresp => {
      this.jr = jresp;
      this.vendor = this.jr.data as Vendor;
      this.router.navigate(['/vendor/list']);
    });
  }

}
