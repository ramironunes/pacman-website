/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Start line component
 * ===========================================================================
 */

import { TetrisStateService } from '@tetris-game/state/tetris.state';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'g-start-line',
  standalone: true,
  imports: [NumberComponent, NgIf],
  templateUrl: './start-line.component.html',
  styleUrls: ['./start-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartLineComponent {
  private tetrisState = inject(TetrisStateService);

  hasCurrent = this.tetrisState.hasCurrent;
  clearedLines = this.tetrisState.clearedLines;
  initLine = this.tetrisState.initLine;
}
