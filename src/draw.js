
/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
export class Draw {
    /**
     *  draw class provides methods to draw shapes on the screen.
     *  -> provide methods to draw rectangle, outline rectangle, line
     */
    constructor() {
        this.obj = null;
    }
    /**
     * create rect on the screen
     * @param {pygame.display.set_mode()} screen - the screen to draw on
     * @param {[0,0,0]} color - tuples[int,int,int]
     * @param {Rect|Array} rect - the rectangle to draw
     *  -> Array format: [x, y, width, height]
     */
    rect(screen, color, rect) {
        let [r, g, b] = color;
        if (rect.__type__() == 'Rect') {
            this.obj = [rect.x, rect.y, rect.w, rect.h];

        } else {
            this.obj = rect;

        }
        let [x, y, w, h] = this.obj;
        screen.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        screen.ctx.fillRect(x, y, w, h);

    }
    /**
     * create outline rect on the screen
     * @param {pygame.display.set_mode()} screen - the screen to draw on
     * @param {[0,0,0]} color - tuples[int,int,int]
     * @param {Rect|Array} rect - the rectangle to draw
     *  -> Array format: [x, y, width, height]
     * @param {int} width - the width of the outline
     */
    outlinerect(screen, color, rect, width) {
        let [r, g, b] = color;
        if (rect.__type__() == 'Rect') {
            this.obj = [rect.x, rect.y, rect.w, rect.h];

        } else {
            this.obj = rect;

        }
        let [x, y, w, h] = this.obj;
        screen.ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
        screen.ctx.lineWidth = width;

        screen.ctx.strokeRect(x, y, w, h);

    }
    /**
     * create outline rect on the screen
     * @param {pygame.display.set_mode()} screen - the screen to draw on
     * @param {[0,0,0]} color - tuples[int,int,int]
     * @param {[x,y]} start - the x and y coordinates of the starting point
     * @param {[x,y]} end - the x and y coordinates of the ending point
     * @param {int} thickness - the width of the line
     */
    line(screen, color, start, end, thickness) {
        screen.ctx.beginPath();
        screen.ctx.moveTo(start[0], start[1]);   // Starting point (x, y)
        screen.ctx.lineTo(end[0], end[1]); // Ending point (x, y)
        screen.ctx.strokeStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
        screen.ctx.lineWidth = thickness;
        screen.ctx.stroke();
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__(){
        return 'Draw';
    }
}