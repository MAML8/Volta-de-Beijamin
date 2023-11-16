class PowerUP extends Animacao{
  constructor(tipo){
    super(icura, width, 16*3, 16*3, 16, 16, 2);
    this.y=this.y-200;
    this.tipo = tipo;
    this.encostado=false;
    this.tipos=["cura","cura","escudo","ponto","ponto","ponto",
                "ponto","ponto","invencível","escudo","escudo"];
    if(this.tipo==="cura"){
      this.image=icura;
    } else if(this.tipo==="escudo"){
      this.image=icudo;
    } else if(this.tipo==="ponto"){
      this.image=imeda;
    } else if(this.tipo==="invencível"){
      this.image=igay;
    }
  }
  tick(){
    this.x=this.x - 8;
     if(this.x<-this.iwidth){
       this.x=width*1.5+Math.random()*5;
       this.mudartipo();
       this.encostado=false;
       this.aparecendo=true;
     }
  }
  efeito(player){
    if(this.tipo==="cura"){
      player.ganharvida(1);
    } else if(this.tipo==="escudo"){
      player.escudo=true;
    } else if(this.tipo==="ponto"){
      pontuação=pontuação+85;
    } else if(this.tipo==="invencível"){
      player.invencivel=true;
      setTimeout(() => {player.perdendoinvencivel = true}, 5000);
      setTimeout(() => {player.invencivel = false; player.perdendoinvencivel=false}, 6000);
    }
     pontuação=pontuação+15;
  }
  mudartipo(texto){
    if(texto==undefined){
      this.tipo = random(this.tipos);
    } else this.tipo = texto;
    
    if(this.tipo==="cura"){
      this.image=icura;
    } else if(this.tipo==="escudo"){
      this.image=icudo;
    } else if(this.tipo==="ponto"){
      this.image=imeda;
    } else if(this.tipo==="invencível"){
      this.image=igay;
    }
  }
}