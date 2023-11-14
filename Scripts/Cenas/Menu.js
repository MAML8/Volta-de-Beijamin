class Menu{
  constructor(){
    this.inicio = new Botao("Iniciar", width/2, height - 50, () => mudarCena("jogo"));
    this.tuto = new Botao("Como jogar", width/2, height - 200, () => mudarCena("tuto"));
    this.prejuego = new Botao("História", width/2, height - 125,() => mudarCena("prejogo"));
    this.leaderboard = new Botao("LeaderBoard", width/2, height - 275,() => mudarCena("leaderboard"));
  }
  keyPressed(){
    
  }
  TouchStarted(){
    
  }
  start(){
    this.inicio.show();
    this.tuto.show();
    this.prejuego.show();
    this.leaderboard.show();
    if(musica.isPlaying())
      musica.stop();
    if(menumu.isPlaying()==false)
      menumu.loop();

    jogo.reiniciar();
    
    fill('orange');
    image(aa,0,0, gameWidth, gameHeight);
    textFont(titulo);
    textAlign(CENTER);
    textSize(30);
    text("A VOLTA PARA CASA DE",gameWidth/2,150);
    textSize(50);
    text("BEIJAMIN",gameWidth/2,250);
  }
  stop(){
    this.inicio.hide();
    this.tuto.hide();
    this.prejuego.hide();
    this.leaderboard.hide();
  }
  draw(){
  }
  
}