class Inimigo extends Animacao{
  constructor(tipo,ameaça,delay){
    super(gota, width, 274/4.3, 274/4.3, 274, 274, 2);
    this.x=this.x+delay;
    this.delay=delay;
    this.encostado=false;
    this.ameaça=ameaça;
    this.tipo = tipo;
    this.speed = 12;
    
    this.tipos=["normal","voador","voadorb","grande"];
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
    if(this.x>-this.iwidth&&ameaça>=this.ameaça){
      this.x=this.x - this.speed;
    }else if(this.x<-this.iwidth){
      this.reaparece();
      ameaça++;
    }
   }
  reaparece(){
    this.x=width;
    this.encostado=false;
  }
}