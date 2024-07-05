/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   I
 * ===========================================================================
 */

import { Piece } from './piece';
import { PieceRotation, PieceTypes } from './piece-enum';
import { Shapes } from './shape';

const SHAPES_I: Shapes = [];
SHAPES_I[PieceRotation.Deg0] = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 1, 1, 1]
];

SHAPES_I[PieceRotation.Deg90] = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0]
];

export class PieceI extends Piece {
  constructor(x: number, y: number) {
    super(x, y);
    this.type = PieceTypes.I;
    this.next = [
      [0, 0, 0, 0],
      [1, 1, 1, 1]
    ];
    this.setShapes(SHAPES_I);
  }
}
