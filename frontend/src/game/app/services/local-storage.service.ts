/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-07-01 20:27:17
 * @Info:   Local storage service
 * ===========================================================================
 */

const TETRIS_GAME_STORAGE_KEY = 'TETRIS_GAME';

export class LocalStorageService {
  constructor() {}

  static setMaxPoint(max: number) {
    localStorage.setItem(TETRIS_GAME_STORAGE_KEY, `${max}`);
  }

  static get maxPoint(): number {
    const max = parseInt(localStorage.getItem(TETRIS_GAME_STORAGE_KEY));
    return Number.isInteger(max) ? max : 0;
  }
}
