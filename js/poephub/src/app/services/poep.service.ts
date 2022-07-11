import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PoepService {
  getGame(): Observable<any> {
    return of({
      user1: {
        cards: [
          {
            id: 1,
            name: '2_of_hearts',
            callName: 'harten twee',
            selectable: true,
          },
          {
            id: 4,
            name: '5_of_hearts',
            callName: 'harten vijf',
            selectable: true,
          },
          {
            id: 24,
            name: 'queen_of_diamonds',
            callName: 'Koeken Dam',
            selectable: false,
          },
        ],
      },
    });
  }
}

/*

*/
