import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ProductService } from '../services/product.services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  selectedIndex: number;
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {

  }


  allTabClick(event: MouseEvent) {
    let el = event.target as HTMLInputElement;
    //console.log(el.id);
    switch (el.textContent) {
      case 'Home':
        this.selectedIndex = 0;
        console.log('go home');
        this.router.navigate(['/home']);
        break;
      case 'Products':
        this.selectedIndex = 1;
        console.log('go products');
        this.router.navigate(['/products']);
        break;
      case 'My Purchases':
        this.selectedIndex = 3;
        this.router.navigate(['/mypurchases']);
        break;
      default:
       
        break;
    }


  }
}
