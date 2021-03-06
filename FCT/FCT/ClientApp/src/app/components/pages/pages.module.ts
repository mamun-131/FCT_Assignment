import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages.routing.module';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent

  ]
})
export class PagesModule { }
