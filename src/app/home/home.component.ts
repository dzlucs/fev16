import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkListComponent } from '../drink-list/drink-list.component';
import { CardLocation } from '../card-location';
import { FooterComponent } from '../footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, DrinkListComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardLocationList: CardLocation[] = [
    
    {
      "id": 0,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_1.png",
    },

    {
      "id": 1,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_2.png",
    },

    {
      "id": 2,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_3.png",
    },

    {
      "id": 3,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_4.png",
    },

    {
      "id": 4,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_5.png",
    },

    {
      "id": 5,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_6.png",
    },

    {
      "id": 6,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_7.png",
    },

    {
      "id": 7,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_8.png",
    },

    {
      "id": 8,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_9.png",
    },

    {
      "id": 9,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_1.png",
    },

    {
      "id": 10,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_2.png",
    },

    {
      "id": 11,
      "name": "Caipirinha",
      "price": 15,
      "photo": "/assets/drink_3.png",
    }

  ];
}
