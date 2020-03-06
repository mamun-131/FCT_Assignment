import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
//import { PagesModule } from './components/pages/pages.module';
import { AuthInterceptor } from './components/auth/auth.interceptor';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SharedModule } from './components/shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { ShopModule } from './components/shop/shop.module';
import { AppService } from './app.service';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    ShopModule,
    ToastrModule.forRoot(),
    ],
   
  providers: [ToastrService,
              AppService,
              {
                  provide: HTTP_INTERCEPTORS,
                  useClass: AuthInterceptor,
                  multi: true
              }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
