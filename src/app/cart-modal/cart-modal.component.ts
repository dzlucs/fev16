import { Component, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})

export class CartModalComponent {

  @Output() close = new EventEmitter<void>();
  cartItems: any[] = [];
  cart: any[] = [];

  constructor(private cartService: CartService) {
    //this.cartService.cartItems$.subscribe((items) => {
    //  this.cartItems = items;
    //});
  }

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  removeItem(index: number) {
    this.cartService.removeCartItem(index);
  }

  //  ID5 DIRETRIZ ESTRUTURAL PARA OCULTAR E MOSTRAR CONTEÚDO DINÂMICO
  closeModal() {
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }

  
  calculateTotal() {
    return this.cart.reduce((total, drink) => total + drink.price, 0);
  }
}