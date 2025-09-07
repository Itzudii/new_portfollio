/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
export class Sprite {
    /**
     * Abstract class representing a sprite in the game.
     * This class should not be instantiated directly.
     */
    constructor() {
        if (new.target === Sprite) {
            throw new Error("Cannot instantiate abstract class directly");
        }
        this.image = undefined;
        this.rect = undefined;
        this.group = undefined;
        this.color = 'rgb(0, 0, 0)';
    }
    /**
     * initialize the sprite
     * @param {void}
     * @returns {void}
     */
    init(){
        // abstract method to be implemented by subclasses
    }

    /**
     * draw the sprite on the screen
     * @param {pygame.display.set_mode()} screen 
     * @returns {void}
     */
    draw(screen) {
        screen.blit(this.image, [this.rect.x, this.rect.y]);
    }

    /**
     * remove the sprite from the current group
     * @param {void} 
     * @returns {void}
     */
    kill(){
        this.group.remove(this);
    }
    /**
     * update the sprite
     * @param {void}
     * @returns {void}
     */

    update() {
        throw new Error("Abstract method 'update' must be implemented");
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__(){
        return 'Sprite';
    }
    
}