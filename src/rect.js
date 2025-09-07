/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
export class Rect {
    /**
     *  Represents a rectangle, commonly used for 
     * 1. positioning
     * 2. collision detection
     * 3. aligning sprites
     * @param {number} x - The x-coordinate of the rectangle's top-left corner.
     * @param {number} y - The y-coordinate of the rectangle's top-left corner.
     * @param {number} w - The width of the rectangle.
     * @param {number} h - The height of the rectangle.
    */
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
    }

/**
 * method for variable access with current rect info.
 */
  get right() {
    return this.x+this.w;
  }
  set right(value){
    this.x = value - this.w;
  }

  get left() {
    return this.x;
  }
  set left(value){
    this.x = value;
  }

  get top(){
    return this.y;
  }
  set top(value){
    this.y = value;
  }
  get bottom(){
    return this.y +this.h;
  }
  set bottom(value){
    this.y = value - this.h;
  }

  get topleft(){
    return [this.x,this.y];
  }
  set topleft(value){
    this.x = value[0];
    this.y = value[1];
  }

  get topright(){
    return [this.right,this.y];
  }
  set topright(value){
    this.right = value[0];
    this.y = value[1];
  }

  get bottomleft(){
    return [this.x,this.bottom];
  }
  set bottomleft(value){
    this.x = value[0];
    this.bottom = value[1];
  }

  get bottomright(){
    return [this.right,this.bottom];
  }
  set bottomright(value){
    this.right = value[0];
    this.bottom = value[1];
  }
    

  
    /**
     * returns a new Rect object with the same properties as the current one.
     * @returns {Rect} - A new Rect object with the same x, y, w, and h values.
     */

    copy() {
        return new Rect(this.x, this.y, this.w, this.h);
    }
    /**
     * use to find collision detection between current rectangles and another rectangle
     * @param {Rect} rect 
     * @returns {boolean} - Returns true if the rectangles collide, otherwise false.
     */

    colliderect(rect) {
        if (rect.x + rect.w > this.x && rect.x < this.x + this.w && rect.y + rect.h > this.y && rect.y < this.y + this.h) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * use to find collision detection between current rectangles and a point
     * @param {Array} point - An array representing the point's coordinates, e.g., [x, y].
     * @returns {boolean} - Returns true if the rectangles collide, otherwise false.
     */
    collidepoint(point) {
        if (this.x < point[0] && point[0] < this.x + this.w && this.y < point[1] && point[1] < this.y + this.h) {
            return true;
        } else {
            return false;
        }
    }
/**
     * get the type of the sprite
     * @returns {string}
     */
    __type__(){
        return 'Rect';
    }

}