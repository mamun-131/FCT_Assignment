import { Injectable, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService {
    @Inject('BASE_URL') BaseURI1: string;

      // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'

        })
    }
    options = {
        headers: this.httpOptions.headers
    }

    constructor(private fb: FormBuilder, private http: HttpClient) {
    }

  //register the user
  register(formData) {
    var body = {
      UserName: formData.UserName,
      Email: formData.Email,
      FullName: formData.FullName,
      Password: formData.Password
    };
    return this.http.post('api/ApplicationUser/Register', body , this.options);
  }

  //login the user
  login(formData) {
    return this.http.post('api/ApplicationUser/Login', formData, this.options);
  }

  //get user profile
  getUserProfile() {
    return this.http.get('api/UserProfile');
  }

    
}
