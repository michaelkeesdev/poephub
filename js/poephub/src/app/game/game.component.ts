import { PoepService } from './../services/poep.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'poep-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  @Input()
  game: any;

  constructor() {}

  ngOnInit(): void {}
}
