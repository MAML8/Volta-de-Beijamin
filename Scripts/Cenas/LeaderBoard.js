let retorno;

class LeaderBoard{
    constructor(){
      this.voltar = new Botao("Voltar", width/2, height - 175,() => mudarCena("menu"));
    }
    keyPressed(){
      
    }
    TouchStarted(){
      
    }
    start(){
      if(musica.isPlaying())
        musica.stop();
      if(menumu.isPlaying()==false)
        menumu.loop();
      this.voltar.show();
      $.getJSON("./PHP/getScores.php", {}).done((dados) => {
        console.log(dados[0].nome)
        textFont(pixelito);
        image(aa,0,0, width, height);
        fill('green');
        textAlign(CENTER);
        textSize(grande);
        const x1 = width/2-100, x2 = width/2+100;
        text("NOME", x1, 50);
        text("Pontuação", x2, 50);
        fill('white');
        textSize(pequeno);
        const y = 30;
        for (let i = 0; i<100; i++) {
          if(dados[i]==undefined)
            break;

          text(dados[i].nome, x1, 70+y*i);
          text(dados[i].ponto, x2, 70+y*i);
        }
      });
    }
    stop(){
      this.voltar.hide();
    }
    draw(){

    }
    
  }