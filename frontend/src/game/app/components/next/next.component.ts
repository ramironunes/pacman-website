/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Next component
 * ===========================================================================
 */

import { Tile, TileValue } from '@tetris-game/interface/tile/tile';
import { TetrisStateService } from '@tetris-game/state/tetris.state';
import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'g-next',
  standalone: true,
  imports: [TileComponent, NgFor],
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextComponent {
  private tetrisState = inject(TetrisStateService);

  next = computed(() =>
    this.tetrisState.next().next.map((row) => row.map((value) => new Tile(value as TileValue)))
  );
}
