class Botao{
  constructor(texto, x, y, onpress) {
    this.texto = texto;
    this.x = x;
    this.y = y+(windowHeight-height)/2;
    
    this.botao = createButton(this.texto);
    this.botao.parent("holder");
    this.botao.center("horizontal");
    this.botao.position(this.botao.position().x, this.y);
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