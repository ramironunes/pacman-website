/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Button component
 * ===========================================================================
 */

import { ArrowButton, ArrowButtonTransform } from '@tetris-game/interface/ui-model/arrow-button';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'g-button',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() className = '';
  @Input() isAbsolute = false;
  @Input() top: number;
  @Input() left: number;

  @Input() active: boolean;
  @Input() arrowButton: ArrowButton;

  get arrowTransforms() {
    return ArrowButtonTransform[this.arrowButton];
  }
}
