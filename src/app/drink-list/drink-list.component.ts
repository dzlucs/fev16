import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLocation } from '../card-location';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-drink-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})

export class DrinkListComponent {
  //@Input
  @Input() cardLocation!:CardLocation;

  drinks = [] = [
    
    {
      "id": 0,
      "name": "Bloody Mary",
      "price": 20,
      "photo": "/assets/dbbloodymary.jpg",
    },

    {
      "id": 1,
      "name": "Long Island Ice Tea",
      "price": 15,
      "photo": "/assets/dblongisland.jpg",
    },

    {
      "id": 2,
      "name": "Gin Lemon",
      "price": 20,
      "photo": "/assets/dbginlemon.jpg",
    },

    {
      "id": 3,
      "name": "Caipirinha",
      "price": 12,
      "photo": "/assets/dbcaipirinha.jpg",
    },

    {
      "id": 4,
      "name": "Space Odyssey",
      "price": 20,
      "photo": "/assets/dbspaceodyssey.jpg",
    },

    {
      "id": 5,
      "name": "Mojito",
      "price": 15,
      "photo": "/assets/dbmojito.jpg",
    },

    {
      "id": 6,
      "name": "Sangria",
      "price": 20,
      "photo": "/assets/dbsangria.jpg",
    },

    {
      "id": 7,
      "name": "Vodka Tonic",
      "price": 10,
      "photo": "/assets/dbvodkatonic.jpg",
    },

    {
      "id": 8,
      "name": "Cosmopolitan",
      "price": 30,
      "photo": "/assets/dbcosmo.jpg",
    },

    {
      "id": 9,
      "name": "Lassi Khara",
      "price": 25,
      "photo": "/assets/dblassikhara.jpg",
    },

    {
      "id": 10,
      "name": "Mai Tai",
      "price": 20,
      "photo": "/assets/dbmaitai.jpg",
    },

    {
      "id": 11,
      "name": "Manhattan",
      "price": 30,
      "photo": "/assets/dbmanhattan.jpg",
    }
  ];

  

  constructor(private cartService: CartService, /*private cocktailService: CocktailService*/) {}

  addToCart(drink: any) {
    this.cartService.addDrink(drink);
  }

  
}
