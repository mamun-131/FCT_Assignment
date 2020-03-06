import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.services';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) {
    //to get all products to display
    this.productService.getAllProducts()
      .subscribe(
        (products: Product[]) => {

          console.log(products);
        }
      );
  }

  ngOnInit() {
  }

}
