class Pause{
  constructor(){
    
    this.voltar = new Botao("Menu Principal", width/2, height - 50, () => mudarCena("menu"));
    this.resumir = new Botao("Continuar", width/2, height - 125,() => mudarCena("jogo"));
  }
  draw(){
    
  }
  start(){
    this.voltar.show();
    this.resumir.show();
  }
  stop(){
    this.voltar.hide();
    this.resumir.hide();
  }
  keyPressed(){
    if(key==='Escape'||key==='p'){
      mudarCena("jogo");
    }
  }
}