/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Sound component
 * ===========================================================================
 */

import { TetrisStateService } from '@tetris-game/state/tetris.state';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

@Component({
  selector: 'g-sound',
  standalone: true,
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoundComponent {
  private tetrisState = inject(TetrisStateService);

  muted = computed(() => !this.tetrisState.isEnableSound());
}
