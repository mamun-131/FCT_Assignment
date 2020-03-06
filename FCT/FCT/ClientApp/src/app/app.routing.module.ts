import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home'
    ,
    pathMatch: 'full'
  },
  {
    path: '', component: MainComponent, children:[
      {
        path: '',
        loadChildren: './components/shop/shop.module#ShopModule'
      },
      
      {
        path: 'pages',
        loadChildren: './components/pages/pages.module#PagesModule'
      }

    ] }
  ,

  {
    path: '**',
    redirectTo: 'home'
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
