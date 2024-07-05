/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Level component
 * ===========================================================================
 */

import { TetrisStateService } from '@tetris-game/state/tetris.state';
import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'g-level',
  standalone: true,
  imports: [NgIf, NumberComponent],
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LevelComponent {
  private tetrisState = inject(TetrisStateService);

  speed = this.tetrisState.speed;
  hasCurrent = this.tetrisState.hasCurrent;
  initSpeed = this.tetrisState.initSpeed;
}
