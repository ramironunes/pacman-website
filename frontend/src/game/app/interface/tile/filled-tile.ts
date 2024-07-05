/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Filled tile
 * ===========================================================================
 */

import { Tile } from './tile';

export class FilledTile extends Tile {
  constructor(isSolid = false) {
    super(1);
    this.isSolid = isSolid;
  }
}
