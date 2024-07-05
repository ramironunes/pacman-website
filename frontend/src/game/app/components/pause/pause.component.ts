/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Pause component
 * ===========================================================================
 */

import { GameState } from '@tetris-game/interface/game-state';
import { TetrisStateService } from '@tetris-game/state/tetris.state';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'g-pause',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pause.component.html',
  styleUrls: ['./pause.component.scss']
})
export class PauseComponent {
  private tetrisState = inject(TetrisStateService);

  paused$: Observable<boolean> = this.tetrisState.gameState$.pipe(
    switchMap((state) => {
      if (state === GameState.Paused) {
        return interval(250).pipe(map((num) => !!(num % 2)));
      }
      return of(false);
    })
  );
}
