import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShopRoutingModule } from './shop.router.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MypurchasesComponent } from './mypurchases/mypurchases.component';
import { ProductComponent } from './products/product/product.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    MypurchasesComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
