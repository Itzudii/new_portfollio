/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
export class Event {
    /**
     * Encapsulates input and system events (keyboard, mouse, window actions).
Methods
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasrect = null;
        this.keypressed = {};
        this.keydown = {};
        this.coord = null;
        this.mousepressed = 0;
        this.mouseclick = 0;

        this.key_pressedT = (event) => {
            this.keypressed[event.key] = true;
        };
        this.key_pressedF = (event) => {
            this.keypressed[event.key] = false;
        };
        this.key_down = (event) => {
            if (!event.repeat) {
                this.keydown[event.key] = [true, 0];
            };
        };
        this.set_pos = (e) => {
            this.coord = [e.clientX - this.canvasrect.left, e.clientY - this.canvasrect.top];
        };
        this.mouse_pressedT = (e) => {
            this.mousepressed = e.buttons;
        };
        this.mouse_pressedF = (e) => {
            this.mousepressed = 0;
        };
        this.mouse_down = (e) => {
            if (!e.repeat) {
                this.mouseclick = [e.buttons, 0];
            }
        };

    }
    /**
     * initialize the event system
     */
    init() {
        this.canvasrect = this.canvas.getBoundingClientRect();
        this.key_pressed_init();
        this.key_down_init();
        this.set_pos_init();
        this.mouse_pressed_init();
        this.mouse_down_init();
    }
    /**
     * quit the event system
     */
    quit() {
        this.key_pressed_quit();
        this.key_down_quit();
        this.set_pos_quit();
        this.mouse_pressed_quit();
        this.mouse_down_quit();
    }

    /**
     * hidden method to set the position of the mouse
     * @returns {void}
     */
    set_pos_init() {
        this.canvas.addEventListener("mousemove", this.set_pos);
    }
    set_pos_quit() {

        this.canvas.removeEventListener("mousemove", this.set_pos);
    }
    /**
     * return the current position of the mouse
     * @returns {Array} - [x, y] coordinates of the mouse
     */
    get_pos() {
        if (this.coord == null) {
            return [0, 0];
        }
        return this.coord;
    }
    /**
    * hidden method to set pressed of mouse
    * @param {void}
    * @returns {void}
    */
    mouse_pressed_init() {
        document.addEventListener("mousedown", this.mouse_pressedT)
        document.addEventListener("mouseup", this.mouse_pressedF)
    }
    mouse_pressed_quit() {
        document.removeEventListener("mousedown", this.mouse_pressedT)
        document.removeEventListener("mouseup", this.mouse_pressedF)
    }
    /**
     * hidden method to set click of mouse
     * @param {void}
     * @returns {void}
     */
    mouse_down_init() {
        document.addEventListener("mousedown", this.mouse_down)
    }
    mouse_down_quit() {
        document.removeEventListener("mousedown", this.mouse_down)
    }
    /**
     * method to give click of mouse
     * @param {void}
     * @returns {1} if mouse is clicked, else @returns {0}
     */
    Mclick() {
        if (this.mouseclick[0] && this.mouseclick[1] == 0) {
            this.mouseclick[1] = 1;
            return this.mouseclick[0];
        }
        else {
            return 0
        }
    }
    /**
     * method to give pressed event of mouse
     * @param {void}
     * @returns {1} if mouse is clicked, else @returns {0}
     */
    Mpressed() {
        return this.mousepressed;
    }
    /**
     * hidden method to set pressed of keyboard
     * @param {void}
     * @returns {void}
     */
    key_pressed_init() {
        document.addEventListener("keydown", this.key_pressedT);
        document.addEventListener("keyup", this.key_pressedF);
    }
    key_pressed_quit() {
        document.removeEventListener("keydown", this.key_pressedT);
        document.removeEventListener("keyup", this.key_pressedF);
    }
    /**
     * hidden method to set click of keyboard
     * @param {void}
     * @returns {void}
     */
    key_down_init() {
        document.addEventListener("keydown", this.key_down);
    }
    key_down_quit() {
        document.removeEventListener("keydown", this.key_down);
    }
    /**
     * use for debuging !experimental
     * @param {void}
     * @returns {void}
     * This method logs the key pressed to the console.
     * It listens for the "keydown" event and logs the key value.
     */
    show_keys() {
        document.addEventListener("keydown", (event) => {
            console.log(event.key);
        });
    }

    /**
     * method to give click of keyboard
     * @param {string} key - the key to check
     * eg. -> 'a', 'b', 'c', 'ArrowUp', 'ArrowDown', 'Enter', etc.
     * @returns {1} if key is clicked, else @returns {0} -
     */
    Kclick(key) {
        try {
            if (this.keydown[key][0] && this.keydown[key][1] == 0) {
                this.keydown[key][1] = 1;
                return this.keydown[key][0];
            }

        } catch (error) {
            return false;
        }
    }
    /**
    * method to give pressed of keyboard
    * @param {string} key - the key to check
    * eg. -> 'a', 'b', 'c', 'ArrowUp', 'ArrowDown', 'Enter', etc.
    * @returns {1} if key is clicked, else @returns {0}
    */
    Kpressed(key) {
        try {
            if (this.keypressed[key]) {
                return this.keypressed[key];
            }

        } catch (error) {
            return false;
        }
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__() {
        return 'Event';
    }


}