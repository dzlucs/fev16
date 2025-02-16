import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { FranchiseModalComponent } from '../franchise-modal/franchise-modal.component';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [CommonModule, CartModalComponent, FranchiseModalComponent, PaymentModalComponent]
})
export class FooterComponent implements OnInit {

  drinkCount = 0;
  isCartModalOpen = false;
  isPaymentModalOpen = false;
  isFranchiseModalOpen = false;
  //cartService: CartService;

  constructor(private cartService: CartService) {
    //this.cartService = new CartService;
  }

  ngOnInit() {
    this.cartService.drinkCount$.subscribe(count => {
      this.drinkCount = count;
    });
  }

  openCartModal() {
    this.isCartModalOpen = true;
  }

  openPaymentModal() {
    this.isPaymentModalOpen = true;
  }

  openFranchiseModal() {
    this.isFranchiseModalOpen = true;
  }
}