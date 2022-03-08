var mainCharacter, mainCharacterImg;
var secondC;
var weapon;
var ground;
var bgImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	mainCharacterImg = loadImage("assets/boy.png");
	bgImg = loadImage("assets/bg.jpg");
}

function setup() {
	mainCharacterGroup = new Group();

	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Sprite Area.
	mainCharacter = createSprite(windowWidth / 15, windowHeight / 2, 40, 60);
	mainCharacterGroup.add(mainCharacter);

	//Create the Bodies Here.
	ground = new Box(0, windowHeight / 1.1, 5000, 20);

	Engine.run(engine);

}


function draw() {
	background(bgImg);
	camera.positionX = mainCharacter.positionX;






	movement();

	ground.show();

	drawSprites();

}

function movement() {
	mainCharacter.x = mainCharacter.x = 0;
	mainCharacter.y = mainCharacter.y + 10;

	if (keyDown("space")) {
		mainCharacter.y = mainCharacter.y - 4;
	}
}