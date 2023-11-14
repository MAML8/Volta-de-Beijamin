function preload() {
  imgpersonagem = loadImage("Imagens/a.png");
  rainbow = loadImage("Imagens/Plaer/a-rainbow.png");
  ai = loadImage("Imagens/Plaer/hurta.png");
  pindo = loadImage("Imagens/Plaer/pulo.png");
  pvindo = loadImage("Imagens/Plaer/qued.png");
  rpindo = loadImage("Imagens/Plaer/pulo-rainbow.png");
  rpvindo = loadImage("Imagens/Plaer/qued-rainbow.png");
  pescudo = loadImage("Imagens/Plaer/escudo.png");
  pausa= loadImage("Imagens/pause.png");
  casota = loadImage("Imagens/Casota.png");
  
  cidade =[ loadImage("Imagens/City/Sky.png"),
           loadImage("Imagens/City/houses.png"),
           loadImage("Imagens/City/houses2.png"),
           loadImage("Imagens/City/fountain&bush.png"),
           loadImage("Imagens/City/houses1.png"),
           loadImage("Imagens/City/umbrella&policebox.png"),
           loadImage("Imagens/City/road.png")
    ];
  gota = loadImage("Imagens/Inimigos/BMG.png");
  gro = loadImage("Imagens/Inimigos/CMG.png");
  voo = loadImage("Imagens/Inimigos/BCG.png");
  gameo = loadImage("Imagens/game-over.png");
  treco = loadImage("Imagens/Treco.png");
  aa = loadImage("Imagens/City1_Night.png");
  lifebar = loadImage("Imagens/lifebar.png");
  icura = loadImage("Imagens/PowerUPs/cura.png");
  imeda = loadImage("Imagens/PowerUPs/meda.png");
  icudo = loadImage("Imagens/PowerUPs/cudo.png");
  igay = loadImage("Imagens/PowerUPs/gay.png");
  
  tecla = loadImage("Imagens/Icones/tecla w.png");
  teclb = loadImage("Imagens/Icones/teclitia cima.png");
  
  musica = loadSound("Sons/trilha_jogo.mp3");
  pulito = loadSound("Sons/somPulo.mp3");
  muerto = loadSound("Sons/Muerto.m4a");
  ouch = loadSound("Sons/ouch.mp3");
  menumu = loadSound("Sons/music3 (online-audio-converter.com).mp3");
  click = loadSound("Sons/Blip_Select.wav");
  pling = loadSound("Sons/pecaflo.wav");
  creck = loadSound("Sons/qubracudo.wav");
  
  titulo = loadFont("Fontes/Platinum Sign.ttf");
  pixelito = loadFont("Fontes/VCR_OSD_MONO_1.001.ttf");
}