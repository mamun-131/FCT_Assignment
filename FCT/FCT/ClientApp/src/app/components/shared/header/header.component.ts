import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() gotLoggedIn: string;
  isExpanded = false;
  constructor() { }

  ngOnInit() {

  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
