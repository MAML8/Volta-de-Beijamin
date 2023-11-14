class Prejogo{
  constructor(){
    this.xbase = width/10;
    this.beijamin=new Animacao(imgpersonagem,this.xbase+900,
                               408/6,768/6,408,768,7);
    this.beijamin.y=height-200;

    
    this.inicio = new Botao("Jogar", width/2, height - 125, () => mudarCena("jogo"));
    this.voltar = new Botao("Voltar", width/2, height - 50,() => mudarCena("menu"));
  }
  start(){
    if(musica.isPlaying())
      musica.stop();
    if(menumu.isPlaying()==false)
      menumu.loop();
    this.inicio.show();
    this.voltar.show();
  }
  stop(){
    this.inicio.hide();
    this.voltar.hide();
  }
  keyPressed(){
    
  }
  draw(){
    textFont(pixelito);
    image(aa,0,0, width, height);
    fill('white')
    textAlign(LEFT);
    textSize(medio);
    text("Beijamin estava voltando da escola, indo para sua casa tranquilo como sempre.",this.xbase,100);
    text("Porém houve uma subita infestação de bolinhas maniacas pra todo canto da cidade.",this.xbase,150);
    text("Beijamin se viu sem escolha, ou ele enlouquecia pelo efeito enlouquecedor das bolinhas",this.xbase,200);
    text("ou ele voltava pra casa são e salvo.",this.xbase,250);
    this.beijamin.render();
    textSize(grande)
    textAlign(CENTER);
    fill('black');
    text("Ajude Beijamin em sua volta para casa.",width/2,height-250);
  }
}