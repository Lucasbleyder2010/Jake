var jake, leftBoundary,rightBoundary;
var path,pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png")
  jake = loadAnimation("jake1.png","jake2.png","jake3.png","jake4PNG")

 
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
pathImg=createSprite("400,400,400,400")
pathImg = addImage(path.png)
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY = -15
path.scale=1.2;

//crie um sprite de menino
jake = createSprite("300,300,60,30")
//adicione uma animação de corrida para ele
jake = addAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG")
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  jake.x = mouse.X
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  jake.collide(rightBoundary,leftBoundary)
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
