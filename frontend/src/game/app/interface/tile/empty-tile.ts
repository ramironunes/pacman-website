/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Emtpy tile
 * ===========================================================================
 */

import { Tile } from './tile';

export class EmptyTile extends Tile {
  constructor() {
    super(0);
    this.isSolid = false;
  }
}
