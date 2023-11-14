class Botao{
  constructor(texto, x, y, onpress) {
    this.texto = texto;
    this.x = windowWidth - gameWidth + x;
    this.y = windowHeight - gameHeight + y;
    
    this.botao = createButton(this.texto);
    this.botao.parent("holder");
    this.botao.position(this.x, this.y);
    this.botao.addClass('botao-tela-inicial');
    this.botao.mousePressed(onpress);
    this.hide();
  }
  show(){
    this.botao.show();
  }
  hide(){
    this.botao.hide();
  }
}