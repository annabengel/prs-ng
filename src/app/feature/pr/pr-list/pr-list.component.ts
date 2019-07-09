import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { PurchaseRequest } from '@model/purchase-request.class';
import { PrService } from '@svc/pr.service';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {
  jr: JsonResponse;
  requests:PurchaseRequest[];
  title: string = 'Purchase Request List';

  constructor(private PRSvc: PrService) { }

  ngOnInit() {
      this.PRSvc.list().subscribe(
        jresp => {
          this.jr = jresp;
          if (this.jr.errors == null) {
          this.requests = this.jr.data as PurchaseRequest[];
          console.log(this.requests);
          } else {
            console.log("Error getting purchase requests.");
            //To Do: implement error handling? (optional/if problem occurs)
          }
        }
      )
    }
  }


