import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gotLoggedIn: string;
  constructor(private appService: AppService) { }

  ngOnInit() {
    //pass the user name for state management
    this.appService.getST().subscribe(res => {
      this.gotLoggedIn = res;
    });
  }

}
