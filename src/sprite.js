/*!
 * jSnake.js - A JavaScript Game Development Library
 * Copyright © 2025 [Uditya Patel]
 * Licensed under the GNU General Public License v3.0
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 */
import { Sprite } from './abtrsaction_sprite.js';
import { Group } from './group.js';

export class sprite {
    /**
     * managing group and spring collision 
     */
    constructor() {
        this.Group = Group;
        this.Sprite = Sprite;
    }
/**
 * 
 * @param {Rect} rect 
 * @param {Group} group 
 * @param {boolean} dokill -> remove collide rect from group if rect is colllide with rect else null;
 * @returns {hashMap} of Rect that in group and collide with Rect 
 */
    spritecollide(rect,group,dokill){
        let data = [];
        group.group.forEach(obj=>{
              if (rect.colliderect(obj.rect)){
                data.push(obj);
                if(dokill){
                    obj.kill();
                }
               }
        })
        return data;
    }
    /**
     * 
     * @param {Group} group1 
     * @param {Group} group2 
     * @param {boolean} dokill1  -> remove collide rect from group1 if rect is collide by rect of group2 ;
     * @param {boolean} dokill2  -> remove collide rect from group2 if rect is collide by rect of group1 ;
     * @returns 
     */
    groupcollide(group1,group2,dokill1,dokill2){
        let data = {};
        group1.group.forEach(obj1=>{
            group2.group.forEach(obj2=>{
                if (obj1.rect.colliderect(obj2.rect)){
                    if (dokill1) {
                        obj1.kill();
                    }
                    if (dokill2) {
                        obj2.kill();
                    }
                    if (!data[obj1]) {
                        data[obj1] = [];
                    }
                    data[obj1].push(obj2);
                }
            })
        })
        return data;
    }
    /**
     * get the type of the sprite
     * @returns {string}
     */
    __type__(){
        return 'sprite';
    }


}