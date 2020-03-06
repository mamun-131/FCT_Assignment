import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
//import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppService } from '../../../app.service';
//import { AppService } from '../../../app.service';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  userDetails: any = {};


  @Input() gotLoggedIn: string;


  constructor(private router: Router, private service: UserService, private appService: AppService) {


  }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.service.getUserProfile().subscribe(
        res => {
          this.userDetails = res;
          console.log(this.userDetails);
          console.log(this.gotLoggedIn);
        },
        err => {
          console.log(err);
        },
      );
    }



    }
    onLogout() {
        localStorage.removeItem('token');
        this.appService.setST('');
        localStorage.removeItem('isLogin');
      this.router.navigate(['/pages/login']);
    }

  
}
