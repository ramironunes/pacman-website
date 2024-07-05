/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Keyboard component
 * ===========================================================================
 */

import { GameState } from '@tetris-game/interface/game-state';
import { ArrowButton } from '@tetris-game/interface/ui-model/arrow-button';
import { KeyboardService } from '@tetris-game/services/keyboard.service';
import { TetrisStateService } from '@tetris-game/state/tetris.state';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  inject
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'g-keyboard',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyboardComponent {
  private tetrisState = inject(TetrisStateService);
  keyboardService = inject(KeyboardService);

  @Input() filling = 20;
  @Output() onMouseDown = new EventEmitter<string>();
  @Output() onMouseUp = new EventEmitter<string>();
  ArrowButton = ArrowButton; //eslint-disable-line @typescript-eslint/naming-convention

  pauseButtonLabel = computed(() =>
    this.tetrisState.gameState() === GameState.Paused ? 'Play' : 'Pause'
  );

  mouseDown(e: Event, key: string) {
    e.preventDefault();
    this.onMouseDown.emit(key);
  }

  mouseUp(e: Event, key: string) {
    e.preventDefault();
    this.onMouseUp.emit(key);
  }
}
