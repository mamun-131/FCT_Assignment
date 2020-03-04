import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
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
