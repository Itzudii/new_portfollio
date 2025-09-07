/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
import { _audioLoader, _draw, _random, _sprite, _html, _image } from "./resources.js";
import { Rect } from './rect.js';
import { image } from './image.js';
import { Font } from './font.js';
import { Surface } from './surface.js';
import { Display } from "./display.js";
import { Event } from "./event.js";


export class JSnake {
    /**
     * JSnake class to manage the game state and provide utility methods.
     * Provides methods to initialize, quit, get the rect of an image, set FPS, and manage the game loop.
     */
    constructor() {
        this.Rect = Rect;
        this.image = image;
        this.font = Font;
        this.Surface = Surface;
        this.display = Display;
        this.event = Event;
        this.fps = 0;
        this.canvas_help = '<canvas id="JSnakeCanvas" style="border: 2px solid #555"></canvas>';
        this.lastTime = 0;

    }
    /**
     * Initialize the JSnake class with the provided dependencies.
     * - The image module.
     * - The display module.
     * - The draw module.
     * - The event module.
     * - The random module.
     * - The sprite module.
     * - The HTML module.
     */
    init() {
        this.image = _image;
        // this.display = _display;
        this.draw = _draw;
        this.random = _random;
        this.sprite = _sprite;
        this.html = _html;
        this.audioLoader = _audioLoader;
    }
    /**
     * Quit the JSnake class and release resources.
     * - Sets all properties to null to release resources.
     */
    quit() {
        this.image = null;
        this.display = null;
        this.draw = null;
        this.event = null;
        this.random = null;
        this.sprite = null;
        this.html = null;

    }
    /**
     * 
     * @param {Image} img 
     * @returns {Rect}
     * convert {Image} into {Rect} object 
     * 
     */
    get_rect(img) {
        /**
         * get the rect of the image
         * @param {Image} img
         * @returns {Rect}
         */
        return new Rect(0, 0, img.width, img.height);
    }
    /**
     * @param {variable that is use to break the loop} bool
     * eg -> isrunning ,running 
     * This method is used to break the game loop.
     */
    breakpoint(bool) {
        setTimeout(() => {
            if (bool) {
                this.gameloop();
            }
        }, this.fps);
    }
    /**
     * Set the frames per second for the game loop.
     * @param {number} value - The desired FPS value.
     * eg. -> 60, 30, 15
     */

    set_fps(value) {
        this.fps = 1000 / value;
    }
    /**
     * The game loop method.
     * This method is called repeatedly to update the game state and render the game.
     * Override this method to implement the game logic.
     * 
     * eg. -> 
     * gameloop() {
     *      // your game logic here
     * }
     */

    gameloop() {
        /**
             not write there it is for overriding gameloop!
             */
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__() {
        return 'JSnake';
    }

}