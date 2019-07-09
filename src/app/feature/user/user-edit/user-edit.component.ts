import { Component, OnInit } from '@angular/core';
import { JsonResponse } from '@model/json-response.class';
import { User } from '@model/user.class';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = 'User Edit';
  jr: JsonResponse;
  user: User;
  userIdStr: number;

  constructor(private UserSvc: UserService, 
              private router: Router, 
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    //get user from DB
    this.route.params.subscribe(params => this.userIdStr = params["id"]);
    this.UserSvc.get(this.userIdStr).subscribe(jresp => {
      this.jr = jresp;
      this.user = this.jr.data as User;
    });

  }

  edit() {
    this.UserSvc.edit(this.user).subscribe(jresp => {
      this.jr = jresp;
      this.user = this.jr.data as User;
      this.router.navigate(['/user/list']);
    });
  }
}
