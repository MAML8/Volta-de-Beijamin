function setup() {
  gameWidth = 1200, gameHeight = 600;
  createCanvas(gameWidth, gameHeight);

  menu = new Menu();
  jogo = new Jogo();
  tuto = new Tuto();
  gameover = new GameOver();
  prejogo = new Prejogo();
  pause = new Pause();
  ui = new UI();
  leaderboard = new LeaderBoard();
  
  frameRate(30);
  cenas ={jogo,menu,tuto,gameover,prejogo,pause,leaderboard};
  cenas[cena].start();
}
function mudarCena(newCena){
  cenas[cena].stop();
  cena = newCena;
  cenas[cena].start();
}
function keyPressed(){
  cenas[cena].keyPressed();
}
//function mousePressed(){
  //cenas[cena].touchStarted();
//}
function draw() {
  cenas[cena].draw();
}

 