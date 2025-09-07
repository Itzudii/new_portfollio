/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
import { Sprite } from './abtrsaction_sprite.js';

export class Group {
    /**
     * Group class to manage a collection of Sprite instances.
     * Provides methods to add, update, draw, remove, and check for Sprite instances.
     */
    constructor() {
        this.group = [];
    }
    /**
     * Initialize the group by calling init on each Sprite instance.
     * @returns {Promise<void>}
     */
    async add(object) {
        if (Array.isArray(object)) {
            for (let value of object) {
                if (value instanceof Sprite) {
                    value.group = this;
                    await value.init();
                    this.group.push(value);
                } else {
                    throw new Error("Only Person instances allowed");
                }
            }
        } else {
            if (object instanceof Sprite) {
                object.group = this;
                await object.init();
                this.group.push(object);
            } else {
                throw new Error("Only Person instances allowed");
            }
        }
        
    }
    /**
     * call update method of all Sprite instances in the group.
     * @returns {void}
    */
   
   update() {
       this.group.forEach(obj=>obj.update());
       
    }
    /**
     * Draw all Sprite instances in the group on the provided screen.
     * @param {pygame.display.set_mode()} screen - The screen to draw on.
     * @returns {void}
     */
    
    draw(screen) {
        
        for (let object of this.group) { 
            screen.blit(object.image, [object.rect.x, object.rect.y]);
        }
    }
    /**
     * Remove a Sprite instance or an array of Sprite instances from the group.
     * @param {Sprite|Array<Sprite>} object - The Sprite instance or array of Sprite instances to remove.
     * @returns {void}
    */
   
   remove(object) {
       if (Array.isArray(object)) {
           let remove = new Set(object);
           this.group = this.group.filter(x => !remove.has(x));
           
        } else {
            
            let index = this.group.indexOf(object);
            this.group.splice(index, 1);
        }
    }
    /**
     * Clear the group by removing all Sprite instances.
     * @returns {void}
    */
   
   empty() {
       this.group = [];
    }
    /**
     * Check if a Sprite instance is in the group.
     * @param {Sprite} object - The Sprite instance to check.
     * @returns {boolean} - True if the Sprite instance is in the group, false otherwise.
    */
   
   has(object) {
       let data = Set(this.group);
       if (data.has(object)) {
           return true;
        } else {
            return false;
        }
    }
    getsprint(index){
        return this.group[index];
    }
    /**
     * Get the number of Sprite instances in the group.
     * @returns {number} - The number of Sprite instances in the group.
    */
    len(){
       let temp = this.group.length;
       return temp;
    }
    /**
     * Return the type of the object.
     * @returns {string} - The type of the object.
     */
    __type__(){
        return 'group';
    }


}