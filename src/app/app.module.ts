import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FranchiseModalComponent } from './franchise-modal/franchise-modal.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { FormsModule } from '@angular/forms';
import { FranchiseService } from './services/franchise.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,
    FranchiseModalComponent,
    PaymentModalComponent,
    HomeComponent,
    FooterComponent,
    DrinkListComponent,
    FormsModule
  ],
  providers: [FranchiseService, CartService],
  bootstrap: []
})
export class AppModule { }