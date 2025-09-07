/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
import { Rect } from './rect.js';
export class Surface {
    /**
     * create canvas with width and height
     * @param {[width,height]} point 
     */
    constructor(point) {
        this.image = document.createElement('canvas');
        this.image.width = point[0];
        this.image.height = point[1];
        this.ctx = this.image.getContext('2d');

        this.x = 0;
        this.y = 0;

        this.loaded = new Promise((resolve) => {
            this.image.onload = () => resolve(this);
        });
    }
/**
 * 
 * @returns {Rect} of current surface
 */
    get_rect() {
        return new Rect(this.x, this.y, this.image.width, this.image.height);
    }
    /**
     * fill color to current instance canvas
     * @param {[r,g,b]} color 
     */
    fill(color){
        let [r, g, b] = color;
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.clearRect(0, 0, this.image.width, this.image.height);
        this.ctx.fillRect(0, 0, this.image.width, this.image.height);
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__(){
        return 'Surface';
    }

}