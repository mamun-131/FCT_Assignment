import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

    isLoggedIn = false;

    @Input() nameM: string;


    constructor() {
      


    }

  ngOnInit() {


  }
}
