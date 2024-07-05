/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Animated tile
 * ===========================================================================
 */

import { Tile } from './tile';

export class AnimatedTile extends Tile {
  constructor(isSolid = false) {
    super(2);
    this.isSolid = isSolid;
  }
}
