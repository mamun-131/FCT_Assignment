import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../shared/services/product.services';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
  
 @Input() product: Product;

  constructor(private dialog: MatDialog, private router: Router, private productService: ProductService ) { }

  ngOnInit() {
  }

  purchaseItem(id: number) {

    //to buy a product
    this.productService.addPurchase(String(localStorage.getItem('userId')),id).subscribe(
      (res: any) => {
        console.log(res);
      },
      err => {
        if (err.status == 400)
          console.log('Purchase Submission failed');
        else
          console.log(err);
      }
    );
    console.log(id);
  }
 
}
