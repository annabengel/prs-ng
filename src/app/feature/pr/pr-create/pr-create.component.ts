import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request.class';
import { User } from '@model/user.class';
import { PrService } from '@svc/pr.service';
import { UserService } from '@svc/user.service';
import { Router } from '@angular/router';
import { SystemService } from '@svc/system.service';

@Component({
  selector: 'app-pr-create',
  templateUrl: './pr-create.component.html',
  styleUrls: ['./pr-create.component.css']
})
export class PrCreateComponent implements OnInit {
  title: string = "Purchase Request Create";
  jr: JsonResponse;
  request: PurchaseRequest = new PurchaseRequest();


  constructor(private prSvc: PrService, private sysSvc: SystemService, private router: Router) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn) {
      this.request.user = this.sysSvc.data.user.instance;
    } else {
      console.error("User not logged in.");
    }
  }

  create() {
    this.prSvc.create(this.request).subscribe(
      jresp => {
        this.jr = jresp;
        this.router.navigate(['/pr/list']);
      });
  }

}
