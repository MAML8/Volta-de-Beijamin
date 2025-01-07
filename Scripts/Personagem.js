class Personagem extends Animacao{
  constructor(/*image, x, iwidth, iheight, swidth, sheight, mframes*/){
    super(/*image, x, iwidth, iheight, swidth, sheight, mframes*/imgpersonagem,0,408/6,768/6,408,768,7);
    this.pulando = false;
    this.pulando2 = false;
    this.jspeed = 0;
    this.g = 3;
    this.vida = 3;
    this.vidam=3;
    this.escudo=false;
    this.invencivel=false;
    
    this.hurt = new Animacao(ai,this.x,this.iwidth,this.iheight,
                             this.swidth,this.sheight,2);
    this.rainbow=new Animacao(rainbow,this.x,this.iwidth,
                  this.iheight,this.swidth,this.sheight,10);
    this.machuca=1.0;
    this.tempomachuca=1.0;
    this.sainbow=0;
    this.mainbow=1;
    this.perdendoinvencivel=false;
  }
  pulo(){
    if(this.pulando==false){
      this.pulando = true;
      this.jspeed = -26;
      this.aparecendo=false;
      pulito.play();
    } else if(this.pulando2==false){
      this.pulando2=true;
      this.jspeed = -26;
      pulito.play();
    }
  }
  tick(){
    this.y = this.y + this.jspeed;
    this.jspeed = this.jspeed+this.g;
    if(this.y>=this.chao){
      this.y=this.chao;
      this.jspeed=0;
      this.pulando=false;
      this.pulando2=false;
    }
    this.hurt.y=this.y;
    if(this.machuca<this.tempomachuca){
      this.machuca+=deltaTime/1000.0;
    }
  }
  trueRender(){
    if(this.machuca<this.tempomachuca){
      this.hurt.render();
    } else if(this.pulando){
      if(this.cs()){
        image(pvindo,this.x,this.y,
              this.iwidth,this.iheight);
        if(this.invencivel){
          image(rpvindo,this.x,this.y,
              this.iwidth,this.iheight);
        }
      } else{
        image(pindo,this.x,this.y,
              this.iwidth,this.iheight);
        if(this.invencivel){
          image(rpindo,this.x,this.y,
              this.iwidth,this.iheight);
        }
      }
    } else this.aparecendo=true;
    this.render();
    if(this.invencivel&&this.aparecendo){
      this.mesclaranimação(this.rainbow, this);
      if(this.perdendoinvencivel==false)
        this.rainbow.render();
      else{ if(this.sainbow==this.mainbow){
        this.rainbow.render();
        this.sainbow=0;
      } else this.sainbow++;
      }
    } 
    if(this.escudo){
      image(pescudo, this.x,this.y-(1),
            this.iwidth,this.iheight+(12/6));
    }
  }
  cs(){
    return this.jspeed>0;
  }
  perdervida(h){
    if(this.invencivel==false){
      if(this.escudo==false){
        if(this.machuca>=this.tempomachuca){
        this.vida=this.vida-h;
        this.machuca=0;
        this.aparecendo=false;
        ouch.play();
      }} else{
        this.escudo=false;
        this.machuca=0;
        creck.play();
      }
    }
  }
  ganharvida(h){
    this.vida=this.vida+h;
    if(this.vida>this.vidam)
      this.vida=this.vidam;
  }
  collision(inimigo){
    const c = collideRectRect(this.x,this.y,this.iwidth,this.iheight,
                inimigo.x+(17/4.3),inimigo.y,
                inimigo.iwidth-((17*2)/4.3),inimigo.iheight);
    return c;
  }
  collisionp(powerup){
    const c = collideRectRect(this.x,this.y,this.iwidth,this.iheight,
                powerup.x,powerup.y,powerup.iwidth,powerup.iheight);
    return c;
  }
}