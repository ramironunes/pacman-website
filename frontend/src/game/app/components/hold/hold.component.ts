/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Hold component
 * ===========================================================================
 */

import { Tile, TileValue } from '@tetris-game/interface/tile/tile';
import { TetrisStateService } from '@tetris-game/state/tetris.state';
import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'g-hold',
  standalone: true,
  imports: [NgFor, TileComponent],
  templateUrl: './hold.component.html',
  styleUrls: ['./hold.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldComponent {
  private tetrisState = inject(TetrisStateService);

  hold = computed(() =>
    this.tetrisState.hold().next.map((row) => row.map((value) => new Tile(value as TileValue)))
  );
}
