/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Screen decoration component
 * ===========================================================================
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilledTile } from '@tetris-game/interface/tile/filled-tile';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'g-screen-decoration',
  standalone: true,
  imports: [TileComponent],
  templateUrl: './screen-decoration.component.html',
  styleUrls: ['./screen-decoration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScreenDecorationComponent {
  title = 'TETRIS';
  filled = new FilledTile();
}
