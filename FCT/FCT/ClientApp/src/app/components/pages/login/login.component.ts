import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails: any = {};
  constructor(private service: UserService, private router: Router, private appService: AppService) { }


  ngOnInit() {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
     // this.submitEM.emit(this.form.value);
      console.log(this.form.value);
      this.service.login(this.form.value).subscribe(
        (res: any) => {

          localStorage.setItem('token', res.token);
          console.log(res.token);
          this.service.getUserProfile().subscribe(
            (res: any) => {
             
              this.userDetails = res;
              localStorage.setItem('isLogin', this.userDetails.fullName);
              localStorage.setItem('userId', this.userDetails.id);
              this.appService.setST(res.fullName);
              console.log(this.userDetails.id);
            });
          this.router.navigateByUrl('/products');
        },
        err => {
          if (err.status == 400) { }
          else { console.log(err); }
        }
      );

    }
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
