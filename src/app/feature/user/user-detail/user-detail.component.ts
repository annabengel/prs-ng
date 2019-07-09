import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  title: string = 'User Detail';
  jr: JsonResponse;
  user: User;
  userIdStr: number;

  constructor(private UserSvc: UserService, 
              private router: Router, 
              private route: ActivatedRoute) { 
 }

  ngOnInit() {
    this.route.params.subscribe(params => this.userIdStr = params["id"]);
    this.UserSvc.get(this.userIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.user = this.jr.data as User;
    });
  }

  remove() {
    this.UserSvc.remove(this.user).subscribe(jresp => {
      this.jr = jresp;
      this.user = this.jr.data as User;
      this.router.navigate(['/user/list']);
    });
  }

}
