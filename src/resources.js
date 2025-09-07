/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
import { Display } from './display.js';
import { Draw } from './draw.js';
import { Event } from './event.js';
import { Random } from './random.js';
import { sprite } from './sprite.js';
import { HTML } from './html.js';
import { image } from './image.js';
import { AudioLoader } from './sound.js';

// export const _display = new Display();
export const _image = new image();
export const _draw = new Draw();
// export const _event = new Event(_display.canvas);
export const _random = new Random();
export const _sprite = new sprite();
export const _html = new HTML();
export const _audioLoader = new AudioLoader();