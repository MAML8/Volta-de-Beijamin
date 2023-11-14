class UI{
  constructor(){
    pontuação = 0;
    this.escala=3;
    this.lwidth=20*this.escala;
    this.lheight=16*this.escala;
    this.ly=20;
    this.xbase=20;
  }
  
  render(){
    fill('white')
    textSize(50);
    textFont(pixelito);
    textAlign(RIGHT);
    text(parseInt(pontuação), width-50, 50);
    fill('red');
    rect(this.xbase+(2*this.escala),this.ly+(2*this.escala),
         this.lwidth*personagem.vida-(2*this.escala),
         this.lheight-(4*this.escala));
    for(var i=0; i<personagem.vidam; i++){
      this.x=this.xbase+(this.lwidth*i);
      if(i==0){
        image(lifebar, this.x, this.ly, this.lwidth, this.lheight,
              0, 0,20,16);
      }else if(i==personagem.vidam-1){
        image(lifebar, this.x, this.ly, this.lwidth*2, this.lheight,
              40, 0,40,16);
      } else{
        image(lifebar, this.x, this.ly, this.lwidth, this.lheight,
              20,0,20,16);
      }
    }
    pontuação=pontuação+0.2;
  }
}