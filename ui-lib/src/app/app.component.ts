import { Component } from '@angular/core';
import {Card} from "ui-controls";
import { assassins } from './assassins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui-lib';
  cards: Card[] = assassins;

  onCardChange(cards: Card[]) {
    console.log(cards)
  }
}
