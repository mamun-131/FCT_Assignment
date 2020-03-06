import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.services';

@Component({
  selector: 'app-mypurchases',
  templateUrl: './mypurchases.component.html',
  styleUrls: ['./mypurchases.component.css']
})
export class MypurchasesComponent implements OnInit {
  purchaseDetail: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //get the buying list of users
    this.productService.getAllPurchases()
      .subscribe(
        (purchase: any[]) => {
          this.purchaseDetail = purchase;
          console.log(purchase);
        }
      );
  }

  //To cancle a purchase
  delectPurchase(id: number) {
    this.productService.deletePurchasesById(id)
      .subscribe(
        (res) => {
          this.productService.getAllPurchases()
            .subscribe(
              (purchase: any[]) => {
                this.purchaseDetail = purchase;
                console.log(purchase);
              }
            );
          console.log(res);
        }
      );
    
  }
}
