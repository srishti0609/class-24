// You could have multiple flags like: start, launch to indicate the state of the game.
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*


*/
var ground;
var tanker;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas=createCanvas(800,400);
engine = Engine.create();
    world = engine.world;

ground=new Ground(30,390,2000,20);
tanker=new Tanker(10,350,50,50);
}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);
ground.display();
tanker.display();
angleMode(60);
rect(150,320,20,90,angleMode);
}


function keyReleased() {
    // Call the shoot method for the cannon.
}