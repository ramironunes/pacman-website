/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Matrix component
 * ===========================================================================
 */

import { GameState } from '@tetris-game/interface/game-state';
import { Tile } from '@tetris-game/interface/tile/tile';
import { MatrixUtil } from '@tetris-game/interface/utils/matrix';
import { TetrisStateService } from '@tetris-game/state/tetris.state';
import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, combineLatest, of, timer } from 'rxjs';
import { map, switchMap, takeWhile } from 'rxjs/operators';
import { TileComponent } from '../tile/tile.component';

@UntilDestroy()
@Component({
  selector: 'g-matrix',
  standalone: true,
  imports: [TileComponent, NgFor, AsyncPipe],
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  private tetrisState = inject(TetrisStateService);

  matrix$: Observable<Tile[]>;

  ngOnInit(): void {
    this.matrix$ = this.getMatrix();
  }

  getMatrix(): Observable<Tile[]> {
    return combineLatest([this.tetrisState.gameState$, this.tetrisState.matrix$]).pipe(
      untilDestroyed(this),
      switchMap(([gameState, matrix]) => {
        if (gameState !== GameState.Over && gameState !== GameState.Loading) {
          return of(matrix);
        }
        const newMatrix = [...matrix];
        const rowsLength = MatrixUtil.Height * 2;
        const animatedMatrix$: Observable<Tile[]> = timer(0, rowsLength).pipe(
          map((x) => x + 1),
          takeWhile((x) => x <= rowsLength + 1),
          switchMap((idx) => {
            const gridIndex = idx - 1;
            if (gridIndex < MatrixUtil.Height) {
              newMatrix.splice(
                gridIndex * MatrixUtil.Width,
                MatrixUtil.Width,
                ...MatrixUtil.FullRow
              );
            }
            if (gridIndex > MatrixUtil.Height && gridIndex <= rowsLength) {
              const startIdx =
                (MatrixUtil.Height - (gridIndex - MatrixUtil.Height)) * MatrixUtil.Width;
              newMatrix.splice(startIdx, MatrixUtil.Width, ...MatrixUtil.EmptyRow);
            }

            return of(newMatrix);
          })
        );
        return animatedMatrix$;
      })
    );
  }
}
