/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Tile component
 * ===========================================================================
 */

import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { Tile } from '@tetris-game/interface/tile/tile';

@Component({
  selector: 'g-tile',
  standalone: true,
  template: ``,
  styleUrls: ['./tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent implements OnInit {
  @Input() tile: Tile;

  constructor(public el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.tile) {
      return;
    }

    if (this.tile.isFilled) {
      this.renderer.addClass(this.el.nativeElement, 'filled');
    }

    if (this.tile.isAnimated) {
      this.renderer.addClass(this.el.nativeElement, 'animated');
    }
  }
}
