import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
  export class RegistrationComponent implements OnInit {
  regFormModel = {
    UserName: '',
    Email: '',
    FullName: '',
    Password: '',
    ConfirmPassword: ''
  };
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onRegister(form: NgForm) {
    this.service.register(form.value).subscribe(
      (res: any) => {
        this.router.navigateByUrl('/pages/registration');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Username already exists.', 'Registration failed.');
        else
          console.log(err);
      }
    );
  }
}
