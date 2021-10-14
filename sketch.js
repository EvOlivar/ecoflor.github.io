var startScreen;
function preload(){
  loginscreen = loadImage('Images/loginscreen.png');
  homescreen = loadImage('Images/homescreen.png');
  searchscreen1 = loadImage('Images/searchscreen1.png');
  searchscreen2 = loadImage('Images/searchscreen2.png');
  profilepage = loadImage('Images/profilepage.png');
  camerahelper = loadImage('Images/camerahelper.png');
}


function setup() {
createCanvas(800,800);

}

function draw() {
  background(220);
  image(startScreen,300,30);
}

function mousePressed(){
  loginscreen = homescreen;
  homescreen = searchscreen1;
  searchscreen1 = searchscreen2;
  searchscreen2 = profilepage;
  profilepage = camerahelper;
  }
