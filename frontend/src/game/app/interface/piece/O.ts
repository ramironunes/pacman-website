/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   O
 * ===========================================================================
 */

import { Piece } from './piece';
import { PieceRotation, PieceTypes } from './piece-enum';
import { Shapes } from './shape';

const SHAPES_O: Shapes = [];
SHAPES_O[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 0, 0],
  [1, 1, 0, 0]
];

export class PieceO extends Piece {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = PieceTypes.O;
    this.next = [
      [0, 1, 1, 0],
      [0, 1, 1, 0]
    ];
    this.setShapes(SHAPES_O);
  }
}
