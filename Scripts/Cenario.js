class Cenario{
  constructor(image,velocidade){
    this.image = image;
    this.velocidade = velocidade;
    if(this.image.length==undefined){ this.parallax = false;}
    else{ this.parallax = true;}
    if(this.parallax==false){
      this.x1 = 0;
      this.x2 = width;
    } else{
      this.x1 = [];
      this.x2 = [];
      for(var i=0;i<this.image.length;i++){
        this.x1.push(0);
        this.x2.push(width);
      }
    }
  }
  render(){
    if(this.parallax==false){
      image(this.image,this.x1,0,width,height);
      image(this.image,this.x2,0,width,height);
    } else {
      for(var i=0;i<this.image.length;i++){
        image(this.image[i],this.x1[i],0,width,height);
        image(this.image[i],this.x2[i],0,width,height);
      }
    }
  }
  mover(){
    if(this.parallax==false){
      this.x1=this.x1-this.velocidade;
      this.x2=this.x2-this.velocidade;
      if(this.x1<-width){
        this.x1=width;
      }
      if(this.x2<-width){
        this.x2=width;
      }
    } else{
        for(var i=0;i<this.image.length;i++){
          this.x1[i]=this.x1[i]-(this.velocidade+i);
          this.x2[i]=this.x2[i]-(this.velocidade+i);
        if(this.x1[i]<=-width){
          this.x1[i]=width;
        }
        if(this.x2[i]<=-width){
          this.x2[i]=width;
        }
      }
    }
  }
}