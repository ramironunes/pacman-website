/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Tetris game component
 * ===========================================================================
 */

import { Component } from '@angular/core';
import { TetrisGameComponent } from './containers/tetris-game/tetris-game.component';

@Component({
  standalone: true,
  selector: 'app-root', //eslint-disable-line
  imports: [TetrisGameComponent],
  template: '<tetris-game></tetris-game>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
