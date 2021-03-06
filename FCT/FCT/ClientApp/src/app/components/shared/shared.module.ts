import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material';


import { ProductService } from "./services/product.services";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserMenuComponent } from "./user-menu/user-menu.component";
import { MenuComponent } from './menu/menu.component';
import { OrderByPipe } from "./pipes/order-by.pipe";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserMenuComponent,
    MenuComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UserMenuComponent,
    MenuComponent,
    OrderByPipe,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [
    ProductService
  ]
})
export class SharedModule { }
