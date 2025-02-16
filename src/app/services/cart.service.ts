import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private drinkCountSubject = new BehaviorSubject<number>(0);
  drinkCount$ = this.drinkCountSubject.asObservable();

  private drinksSubject = new BehaviorSubject<any[]>([]);
  cartItems$ = this.drinksSubject.asObservable();

  private drinks: any[] = [];

  addDrink(drink: any) {
    this.drinks.push(drink);
    this.drinksSubject.next(this.drinks);
    this.drinkCountSubject.next(this.drinks.length);
  }

  removeCartItem(index: number) {
    this.drinks.splice(index, 1);
    this.drinksSubject.next(this.drinks);
    this.drinkCountSubject.next(this.drinks.length);
  }

  getDrinks() {
    return this.drinks;
  }
}