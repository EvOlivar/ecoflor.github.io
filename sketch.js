var startScreen;
function preload(){
  loginscreen = loadImage('Images/loginscreen.PNG');
  homescreen = loadImage('Images/homescreen.PNG');
  searchscreen1 = loadImage('Images/searchscreen1.PNG');
  searchscreen2 = loadImage('Images/searchscreen2.PNG');
  profilepage = loadImage('Images/profilepage.PNG');
  camerahelper = loadImage('Images/camerahelper.PNG');
}


function setup() {
createCanvas(360,650);

}

function draw() {
  background(220);
  image(loginscreen,25,25,300,600);
}

function mousePressed(){
  loginscreen = homescreen;
  homescreen = searchscreen1;
  searchscreen1 = searchscreen2;
  searchscreen2 = profilepage;
  profilepage = camerahelper;
  }
