import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MypurchasesComponent } from './mypurchases/mypurchases.component';
import { AuthGuard } from '../../components/auth/auth.guard';
// Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'mypurchases', component: MypurchasesComponent, canActivate: [AuthGuard] }
  

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
