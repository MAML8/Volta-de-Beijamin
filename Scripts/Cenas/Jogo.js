class Jogo{
  constructor(){
    cenario=new Cenario(cidade,3);
    personagem=new Personagem(/*imgpersonagem,0,408/6,768/6,408,768,7*/);
    inimigos =[new Inimigo("normal", 0, 0),
               new Inimigo("normal", 3, 500),
               new Inimigo("grande", 10, 1100),
               new Inimigo("voador", 16,274/4.3),
               new Inimigo("grande", 24, 1100-274/4.3),
               new Inimigo("voadorb", 38, (274/4.3)*3),
               new Inimigo("voadorb", 52, 250)]
    this.inimigos=[];
    inimigos.forEach(inimigo=>{
      this.inimigos.push(inimigo);
    })
    
    powerup=new PowerUP("escudo");
    
    this.i=0;
    this.tocando=false;
    this.vencível=true;
  }
  reiniciar(){
    pontuação = 0;
    personagem.vida=3;
    ameaça=0;
    this.inimigos.forEach(inimigo=>{
      inimigo.x = width+inimigo.delay;
      inimigo.encostado=false;
    })
  }
  pausar(){
    image(pausa,0,0,width,height);
    fill('white');
    textAlign(CENTER);
    text("Pausado",width/2,height/2);
    mudarCena("pause")
  }
  keyPressed(){
    if(key==='w'||key==='ArrowUp'){
      personagem.pulo();
    }
    if(key==='Escape'||key==='p'){
      this.pausar();
    }
  }
  touchStarted(){
    personagem.pulo();
  }
  verdade(a){
    for(var i=0;i<a.length;i++){
      if(a[i]==false) continue;
      else return false;
    }
    return true;
  }
  start(){
    musica.loop();
    menumu.stop();
  }
  stop(){
    musica.pause();
  }
  draw(){
    cenario.render();
    cenario.mover();
    ui.render();
    
    personagem.gravidade();
    if(personagem.machuca<personagem.tempomachuca){
      personagem.hurt.render();
      personagem.machuca++;
    }
    else if(personagem.pulando){
      if(personagem.cs()){
        image(pvindo,personagem.x,personagem.y,
              personagem.iwidth,personagem.iheight);
        if(personagem.invencivel){
          image(rpvindo,personagem.x,personagem.y,
              personagem.iwidth,personagem.iheight);
        }
      } else{
        image(pindo,personagem.x,personagem.y,
              personagem.iwidth,personagem.iheight);
        if(personagem.invencivel){
          image(rpindo,personagem.x,personagem.y,
              personagem.iwidth,personagem.iheight);
        }
      }
    }
    else personagem.aparecendo=true;
    personagem.render();
    if(personagem.invencivel&&personagem.aparecendo){
      personagem.mesclaranimação(personagem.rainbow, personagem);
      if(personagem.perdendoinvencivel==false)
        personagem.rainbow.render();
      else{ if(personagem.sainbow==personagem.mainbow){
        personagem.rainbow.render();
        personagem.sainbow=0;
      } else personagem.sainbow++;
      }
    } 
    if(personagem.escudo){
      image(pescudo, personagem.x,personagem.y-(1),
            personagem.iwidth,personagem.iheight+(12/6));
    }
    
      this.inimigos.forEach(inimigo=>{
        inimigo.render();
        inimigo.tick();

        if(personagem.collision(inimigo)&&inimigo.encostado==false){
          personagem.perdervida(1);
          inimigo.encostado=true;
          if(personagem.vida<=0){
            musica.stop();
            muerto.play();
            personagem.machuca=personagem.tempomachuca;
            gameover.pontuação=pontuação;
            mudarCena("gameover");
            this.reiniciar();
        }}
      })
    
      powerup.render();
      powerup.tick();
      if(personagem.collisionp(powerup)&&powerup.encostado==false){
        powerup.efeito(personagem);
        powerup.encostado=true;
        powerup.aparecendo=false;
        pling.play();
      }
    
  }
  /*
  vencer(){
    if(this.vencível){
      musica.stop();
      this.tocando=false;
      this.vencível=false;
      textAlign(CENTER);
      textSize(40);
      this.inimigos.forEach(inimigo=>{
        inimigo.x=inimigo.x+width;
        inimigo.encostado=false;
      })
      mudarCena("vitoria");
    }
  }
  */
}