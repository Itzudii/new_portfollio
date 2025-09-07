export class ST {
  constructor(src,loop) {
    this.audio = new Audio();
    this.audio.src = src;
    this.audio.loop = loop;
    this.audio.volume = 1.0;
    this.isLoaded = false;
  }

  async load() {
    return new Promise((resolve, reject) => {
      this.audio.addEventListener('canplaythrough', () => {
        this.isLoaded = true;
        resolve();
      });

      this.audio.addEventListener('error', (e) => {
        reject(new Error("Failed to load audio: " + e.message));
      });

      this.audio.preload = 'auto';
      this.audio.load();
    });
  }

  async play() {
    if (!this.isLoaded) {
      throw new Error("Audio not loaded. Call load() first.");
    }

    try {
      await this.audio.play();
    } catch (err) {
      console.error("Failed to play audio:", err);
    }
  }

  pause() {
    this.audio.pause();
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  fade(ms,unit,value){

    this.audio.volume = 1-unit;
    this.tempfade = setInterval(async () => {
      try {
  
        this.audio.volume += value; 
      } catch (error) {
        this.audio.volume = 1-(1-unit); 
        clearInterval(this.tempfade);
  
      }
    }, (ms / 10))
    this.tempfade();

  }
  fadein(ms) {
    this.fade(ms,1,0.1)
  }
  fadeout(ms){
  this.fade(ms,0,-0.1)

}
}

export class AudioLoader {
  async ShortTrack(src) {
    const music = new ST(src,false);
    await music.load();
    return music;
  }
  async LongTrack(src,loop) {
    const music = new ST(src,loop);
    await music.load();
    return music;
  }
}