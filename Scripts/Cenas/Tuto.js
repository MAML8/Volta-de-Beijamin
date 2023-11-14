class Tuto{
  constructor(){
    this.xbase = width/4;
    this.bm = new Animacao(gota, this.xbase,
                           274/4.3, 274/4.3,274,274,2);
    this.bm.y=160
    this.cura = new Animacao(icura,this.xbase,16*3,16*3,16,16,3);
    this.cura.y=280
    this.escudo = new Animacao(icudo,this.xbase,16*3,16*3,16,16,3);
    this.escudo.y=280+16*3;
    this.moeda = new Animacao(imeda,this.xbase,16*3,16*3,16,16,3);
    this.moeda.y=280+16*3*2;
    this.gay = new Animacao(igay,this.xbase,16*3,16*3,16,16,3);
    this.gay.y=280+16*3*3;

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
  TouchStarted(){
    
  }
  draw(){
    fill('white');
    image(aa,0,0, width, height);
    textFont(pixelito);
    textSize(pequeno);
    textAlign(LEFT);
    text("Use", this.xbase,100);
    image(tecla,this.xbase+60,65,50,50);
    text("ou", this.xbase+120,100);
    image(teclb,this.xbase+165,65,50,50);
    text("para pular (incluindo pulo duplo)", this.xbase+220,100);
    
    this.bm.render();
    textSize(pequeno);
    text("Evite as bolinhas maniacas", this.xbase+62,200);
    
    textSize(medio);
    text("pegue os powerups:", this.xbase,260);
    this.cura.render();
    this.escudo.render();
    this.moeda.render();
    this.gay.render();
    textSize(30);
    fill('red');
    text("cura", this.xbase+16*3,320);
    text("escudo", this.xbase+16*3,320+16*3);
    text("pontuação", this.xbase+16*3,320+16*3*2);
    text("invencibilidade", this.xbase+16*3,320+16*3*3);
    
    textSize(grande)
    fill('black');
    textAlign(CENTER);
    text("Boa sorte!",width/2,height-180);
  }
}