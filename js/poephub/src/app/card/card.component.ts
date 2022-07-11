import { PoepService } from '../services/poep.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poep-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  cardId: string = '5_of_clubs';

  @Input()
  disabled: boolean = false;

  constructor() {}
}
