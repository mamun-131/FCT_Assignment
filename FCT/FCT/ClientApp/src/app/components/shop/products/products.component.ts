import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.services';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  public sortByOrder: string = '';   // sorting
  public viewType: string = 'grid'; // view
  public viewCol: number = 25;

  constructor(private productService: ProductService) {
    this.productService.getAllProducts()
      .subscribe(
        (products: Product[]) => {
          this.products = products;
          console.log(products);
        }
      );
  }

  ngOnInit() {
  }

  // sorting type ASC / DESC / A-Z / Z-A etc.
  public onChangeSorting(val) {
    this.sortByOrder = val;
    
  }

  //change products view type
  public changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;


  }
}
