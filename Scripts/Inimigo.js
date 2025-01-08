class Inimigo extends Animacao{
  constructor(tipo,delay){
    super(gota, width, 274/4.3, 274/4.3, 274, 274, 2);
    this.x=this.x+delay*300;
    this.delay=delay;
    this.tipo = tipo;
    this.speed = 12;
    
    //this.tipos=["normal","voador","voadorb","grande"];
    if(this.tipo==="normal"){
       
    } else if(this.tipo==="voador"){
      this.image = voo;
      this.mframes=0;
      this.y=this.y-300;
    } else if(this.tipo==="voadorb"){
      this.image = voo;
      this.mframes=0;
      this.y=this.y-200;
    }else if(this.tipo==="grande"){
      this.image=gro;
      this.iheight=this.iheight*2;
      this.sheight=548;
      this.chao=height-this.iheight-30;
      this.y=this.chao;
    }
  }
  tick(){
    //console.log(this.x);
    if(this.x>-this.iwidth){
      this.x=this.x - this.speed;
    }
  }
  /*
  reaparece(){
    this.x=width;
  }
  */
}