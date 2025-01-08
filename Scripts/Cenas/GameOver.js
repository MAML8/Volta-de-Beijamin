class GameOver{
  constructor(){
    this.pontuação = 0;
    
    this.voltar = new Botao("Menu Principal", width/2, height - 50, () => mudarCena("menu"));
    this.reiniciar = new Botao("Reiniciar", width/2, height - 125,() => mudarCena("jogo"));
    this.add = new Botao("Adicionar ao Leader Board", width/2, height-200, ()=>this.pontuar());
    this.input = createInput("anônimo");
    this.input.parent("holder");
    this.input.position(width/2-200, height-200);
    this.input.center("horizontal");
    this.input.attribute("placeholder", "insira seu nome aqui");
    this.input.hide();
  }
  pontuar(){
    let postData = {ponto: this.pontuação, nome: this.input.value()};
    $.post("http://criadormarquiano.unaux.com/GameScoresDB/VoltadeBeijamin.php", postData, (a)=>{
      this.add.hide();
      this.input.hide();
      textSize(medio);
      fill('green')
      text("pontuação adicionada com sucesso!", width/2, height-200);
    });
  }
  keyPressed(){
    
  }
  TouchStarted(){
    
  }
  start(){
    this.voltar.show();
    this.reiniciar.show();
    this.add.show();
    this.input.value("");
    this.input.show();
    image(treco, 0, 0, width, height);
    image(gameo, width/2-250, 50, 500, 100);
    textAlign(CENTER);
    textSize(grande);
    fill('blue');
    text("Oh não! Beijamin não sobreviveu as bolinhas maniacas ;-;",
         width/2, height/2-80);
    fill('white');
    text("sua pontuação foi: "+parseInt(this.pontuação),
         width/2, height/2);
  }
  stop(){
    this.voltar.hide();
    this.reiniciar.hide();
    this.add.hide();
    this.input.hide();
  }
  draw(){

  }
}