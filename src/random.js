/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
export class Random {
    /**
     * Random class to generate random numbers.
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @returns {number} - A random integer within the specified range.
     */
    randint(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * @param {number} min - The minimum value of the range.
     * @param {number} max - The maximum value of the range.
     * @param {number} gap - step of iteration.
     * This method generates a random integer within a specified range that is a multiple of the given gap.
     * @returns {number} - A random integer that is a multiple of the gap.
     */
    randint_gap(min, max, gap) {
        let r = this.randint(min, max)
        return Math.floor(r / gap) * gap;
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__(){
        return 'Random';
    }

}