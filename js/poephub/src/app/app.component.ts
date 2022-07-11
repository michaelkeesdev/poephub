import { PoepService } from './services/poep.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'poephub';

  game$: Observable<any> = this.poepService.getGame();

  constructor(private poepService: PoepService) {}

  ngOnInit(): void {
    this.game$ = this.poepService.getGame();
  }
}
