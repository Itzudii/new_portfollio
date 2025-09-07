export class Fire {
    constructor() {
      this.imgs = [];
      this.frame = 0;
      this.speed = .1;
      // this.drawscreen = drawscreen;
    }
    async _addimg(key, data) {
      // this.imgs[key] = [];
      for (let i = 0; i < data[key].length; i++) {
        let img = await jsnake.image.imageload(data[key][i]);
        let imge = await jsnake.image.scale(img, [.3, .3]);
        // let invimge = await jsnake.image.scale(img, [-.3, .3]);
        this.imgs.push(imge);
        this.w = imge.width;

      }


    }
    async init() {
      this.data = await loadjson("firemap.json");
      this.stages = Object.keys(this.data);
      // this.stages.forEach((key)=>{
      // });


      for (let i = 0; i < this.stages.length; i++) {
        await this._addimg(this.stages[i], this.data);
        // let img = await jsnake.image.imageload(this.imgSrc[i]);
        // let imge = await jsnake.image.scale(img,[.3,.3]);
        // let invimge = await jsnake.image.scale(img,[-.3,.3]);
        // this.imgs[i] = {"right":imge,"left":invimge};
      }
      console.log(this.imgs, "hekkw");
      // console.log(this.imgs);

    }
    draw(screen, coord, array) {
      screen.ctx.clearRect(0, 0, screen.w, screen.h);
      if (this.frame > array.length) {
        this.frame = 0;
      }
      console.log(this.imgs,Math.floor(this.frame))
      screen.blit(this.imgs[Math.floor(this.frame)], [coord[0], coord[1]]);
      // screen.scale_blit(this.imgs[Math.floor(this.frame)],[coord[0],coord[1]])

      this.frame += this.speed;
    }
    run(screen,x,y) {

      this.draw(screen, [x, y], this.imgs);
    }
  }