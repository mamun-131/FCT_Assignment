import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ShopRoutingModule } from './shop.router.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
