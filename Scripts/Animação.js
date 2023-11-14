 class Animacao {
  constructor(image, x, iwidth, iheight, swidth, sheight, mframes){
    this.image = image;
    this.x = x;
    this.y = height-iheight-30;
    this.iwidth = iwidth;
    this.iheight = iheight;
    this.swidth = swidth;
    this.sheight = sheight;
    this.chao=height-this.iheight-30;
    
    this.framex = 0;
    this.framey = 0;
    this.mframes = mframes;
    this.frames = 0;
    this.aparecendo=true;
  }
  render(){
    if(this.aparecendo){
      image(this.image, this.x, this.y, this.iwidth, this.iheight,
            this.framex, this.framey, this.swidth, this.sheight);
    }
    this.anima();
  }
  anima(){
    this.frames++;
    if(this.frames>=this.mframes){
      this.frames = 0;
      this.framex=this.framex+this.swidth;
      if(this.framex>=this.image.width){
        this.framey=this.framey+this.sheight;
        this.framex = 0;
        if(this.framey>=this.image.height){
          this.framey=0;
        }
      }
    }
  }
  mesclaranimação(a1,a2){
    a1.framex = a2.framex;
    a1.framey = a2.framey;
    a1.mframes = a2.mframes;
    a1.frames = a2.frames;
    a1.aparecendo=a2.aparecendo;
  }
}