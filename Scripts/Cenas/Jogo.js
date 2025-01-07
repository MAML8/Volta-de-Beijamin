class Jogo{
  constructor(){
    cenario=new Cenario(cidade,4);
    personagem=new Personagem(/*imgpersonagem,0,408/6,768/6,408,768,7*/);

    this.enemyGroups=[
                      {ameaça: 0, invocar: function (){return [new Inimigo("normal", 0)]}},
                      {ameaça: 0, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("normal", 1)]}}, 
                      {ameaça: 0, invocar: function (){return [new Inimigo("grande", 0)]}}, 
                      {ameaça: 0, invocar: function (){return [new Inimigo("voadorb", 0)]}},
                      {ameaça: 6, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("voadorb", 0.5), new Inimigo("normal", 1)]}},
                      {ameaça: 6, invocar: function (){return [new Inimigo("grande", 0), new Inimigo("normal", 0.2)]}},
                      {ameaça: 6, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("voadorb", 0.5)]}},
                      {ameaça: 18, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("normal", 0.2), new Inimigo("normal", 0.4)]}},
                      {ameaça: 13, invocar: function (){return [new Inimigo("grande", 0), new Inimigo("voador", 0.5)]}},
                      {ameaça: 20, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("grande", 0.2)]}},
                      {ameaça: 40, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("voadorb", 0.5), new Inimigo("normal", 1), new Inimigo("voadorb", 1.5), new Inimigo("normal", 2)]}},
                      {ameaça: 40, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("voadorb", 0.5), new Inimigo("normal", 1), new Inimigo("normal", 1.2), new Inimigo("grande", 1.4), new Inimigo("voador", 1.8)]}},
                      {ameaça: 40, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("normal", 0.2), new Inimigo("normal", 1), new Inimigo("grande", 1.2), new Inimigo("normal", 1.4), new Inimigo("voador", 1.8)]}},
                      {ameaça: 40, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("normal", 0.2), new Inimigo("normal", 0.4), new Inimigo("normal", 0.6), new Inimigo("normal", 0.8)]}},
                      {ameaça: 40, invocar: function (){return [new Inimigo("normal", 0), new Inimigo("grande", 0.2), new Inimigo("normal", 0.4), new Inimigo("normal", 1.4), new Inimigo("grande", 1.6), new Inimigo("normal", 1.8)]}},
                    ];
    this.inimigos=[];
    
    powerup=new PowerUP("escudo");
    
    this.i=0;
    this.tocando=false;
    this.vencível=true;
  }
  reiniciar(){
    pontuação = 0;
    personagem.vida=3;
    ameaça=0;
    while(this.inimigos.length>0){
      this.inimigos.pop();
    }
    this.spawn();
  }
  keyPressed(){
    if(key==='w'||key==='W'||key==='ArrowUp'||key===" "){
      personagem.pulo();
    }
    if(key==='Escape'||key==='p'||key==='P'){
      this.pausar();
    }
  }
  pausar(){
    image(pausa,0,0,width,height);
    fill('white');
    textAlign(CENTER);
    text("Pausado",width/2,height/2);
    mudarCena("pause")
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
    
    personagem.trueRender();
    personagem.tick();
    
    this.inimigos.forEach(inimigo=>{
      inimigo.render();
      inimigo.tick();

      if(personagem.collision(inimigo)){
        personagem.perdervida(1);
        if(personagem.vida<=0){
          musica.stop();
          muerto.play();
          gameover.pontuação=pontuação;
          personagem.machuca = personagem.tempomachuca;
          mudarCena("gameover");
          this.reiniciar();
      }}
    })
    if(this.inimigos[0].x<-this.inimigos[0].iwidth){
      this.inimigos.shift();
      ameaça++;
      if(this.inimigos.length<1){
        this.spawn();
      }
    }
  
    powerup.render();
    powerup.tick();
    if(personagem.collisionp(powerup)&&powerup.encostado==false){
      powerup.efeito(personagem);
      powerup.encostado=true;
      powerup.aparecendo=false;
      pling.play();
    }
  
  }
  spawn(){
    let newEnemies;
    do {newEnemies = this.enemyGroups[Math.floor(Math.random()*this.enemyGroups.length)];
    } while(newEnemies["ameaça"]>ameaça);
    newEnemies["invocar"]().forEach(a=>{
      this.inimigos.push(a)
    });
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