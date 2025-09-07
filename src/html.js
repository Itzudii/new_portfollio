/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
export class HTML {
    /**
     * HTML class to manage HTML elements and their data.
     * Provides methods to parse data into HTML elements.
     * Method to get the data of an HTML element.
     * @param {string} query - The CSS selector for the HTML element.
     * eg. -> '.class', '#id', 'tagname'
     * @returns {any} - The data of the HTML element.
     * eg.
     * <p id="score"></p>
     * document.querySelector('#score').data = 100;
     * =>> <p id="score" data="100"></p>
     * 
     */
    parsedata(query,variable){
        document.querySelector(query).data = variable; 
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__(){
        return 'HTML';
    }

}