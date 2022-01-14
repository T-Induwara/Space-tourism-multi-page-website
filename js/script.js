//Start of navigation bar js
console.log("Script loaded nav bar");
var menu1 = new Image;
menu1.src=("assets/shared/icon-hamburger.svg");
var menu2 = new Image;
menu2.src=("assets/shared/icon-close.svg");

var navLinks = document.getElementById("nav-links");
var hamMenu = document.getElementById("toggle-ham-menu");

var homeNavBtn = document.getElementById("home-nav-btn");
var destNavBtn = document.getElementById("dest-nav-btn");
var crewNavBtn = document.getElementById("crew-nav-btn");
var techNavBtn = document.getElementById("tech-nav-btn");

var hamMenuIcon = document.getElementById("toggle-ham-menu").appendChild(menu1);

function imgClick(){
    if (hamMenuIcon.src.match("assets/shared/icon-hamburger.svg")){
        hamMenuIcon.src = "assets/shared/icon-close.svg";
        navLinks.classList.add("navbar-links-active");
    }
    else{
        hamMenuIcon.src = "assets/shared/icon-hamburger.svg";
        navLinks.classList.remove("navbar-links-active");
    }
}
homeNavBtn.classList.add("nav-btn-active");
if(window.location.href.indexOf("index") != -1){
    homeNavBtn.classList.add("nav-btn-active");
}
else if(window.location.href.indexOf("destination") != -1){
    destNavBtn.classList.add("nav-btn-active");
    homeNavBtn.classList.remove("nav-btn-active");
}
else if(window.location.href.indexOf("crew") != -1){
    crewNavBtn.classList.add("nav-btn-active");
    homeNavBtn.classList.remove("nav-btn-active");
}
else if(window.location.href.indexOf("tech") != -1){
    techNavBtn.classList.add("nav-btn-active");
    homeNavBtn.classList.remove("nav-btn-active");
}
//End of navigation bar js

//No js for homepage

//Start of destination 
console.log("Script loaded destination page");

var moonBtn = document.getElementById("moon-btn");
var marsBtn = document.getElementById("mars-btn");
var europaBtn = document.getElementById("europa-btn");
var titanBtn = document.getElementById("titan-btn");

var planet = document.getElementById("planet");
var moonName = document.getElementById("moon-name");
var moonDesc = document.getElementById("moon-desc");
var moonDistance = document.getElementById("dis-value");
var estTravel = document.getElementById("time-value");

window.addEventListener('load',desFunc);
function desFunc(){
    moonBtn.onclick = function(){
        planet.src = "assets/destination/image-moon.webp";
        moonName.innerHTML = "MOON";
        moonDesc.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        moonDistance.innerHTML = "384,400 km";
        estTravel.innerHTML = "3 DAYS";
        moonBtn.classList.add("planet-navbar-active");
        marsBtn.classList.remove("planet-navbar-active");
        europaBtn.classList.remove("planet-navbar-active");
        titanBtn.classList.remove("planet-navbar-active");
    
    }
    marsBtn.onclick = function(){
        planet.src="assets/destination/image-mars.webp";
        moonName.innerHTML = "MARS";
        moonDesc.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
        moonDistance.innerHTML = "225 MIL. km";
        estTravel.innerHTML = "9 MONTHS";
        moonBtn.classList.remove("planet-navbar-active");
        moonBtn.classList.remove("moon-btn");
        marsBtn.classList.add("planet-navbar-active");
        europaBtn.classList.remove("planet-navbar-active");
        titanBtn.classList.remove("planet-navbar-active");
    }
    europaBtn.onclick = function(){
        planet.src="assets/destination/image-europa.webp";
        moonName.innerHTML = "EUROPA";
        moonDesc.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        moonDistance.innerHTML = "628 MIL. km";
        estTravel.innerHTML = "3 YEARS";
        moonBtn.classList.remove("planet-navbar-active");
        moonBtn.classList.remove("moon-btn");
        marsBtn.classList.remove("planet-navbar-active");
        europaBtn.classList.add("planet-navbar-active");
        titanBtn.classList.remove("planet-navbar-active");
    }
    titanBtn.onclick = function(){
        planet.src="assets/destination/image-titan.webp";
        moonName.innerHTML = "TITAN";
        moonDesc.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        moonDistance.innerHTML = "1.6 BIL. km";
        estTravel.innerHTML = "7 YEARS";
        moonBtn.classList.remove("planet-navbar-active");
        moonBtn.classList.remove("moon-btn");
        marsBtn.classList.remove("planet-navbar-active");
        europaBtn.classList.remove("planet-navbar-active");
        titanBtn.classList.add("planet-navbar-active");
    }
}
//End of destination page

//Start of crew page
console.log("Script loaded crew page");
var crewNav1 = document.getElementById("nav-c1");
var crewNav2 = document.getElementById("nav-c2");
var crewNav3 = document.getElementById("nav-c3");
var crewNav4 = document.getElementById("nav-c4");

var crewPosition = document.getElementById("crew-position");
var crewName = document.getElementById("crew-name");
var crewDesc = document.getElementById("crew-desc");
var crewImage = document.getElementById("crew-image");


window.addEventListener('load',crewFunc);
function crewFunc(){
    crewNav1.classList.add("nav-circles-active");
    crewNav1.onclick = function(){
        crewImage.src = "assets/crew/image-douglas-hurley.webp";
        crewPosition.innerHTML = "COMMANDER";
        crewName.innerHTML = "DOUGLAS HURLEY";
        crewDesc.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        crewNav1.classList.add("nav-circles-active");
        crewNav2.classList.remove("nav-circles-active");
        crewNav3.classList.remove("nav-circles-active");
        crewNav4.classList.remove("nav-circles-active");
    }
    crewNav2.onclick = function(){
        crewImage.src = "assets/crew/image-mark-shuttleworth.webp";
        crewPosition.innerHTML = "MISSION SPECIALIST";
        crewName.innerHTML = "MARK SHUTTLEWORTH";
        crewDesc.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        crewNav1.classList.remove("nav-circles-active");
        crewNav2.classList.add("nav-circles-active");
        crewNav3.classList.remove("nav-circles-active");
        crewNav4.classList.remove("nav-circles-active");
    }
    crewNav3.onclick = function(){
        crewImage.src = "assets/crew/image-victor-glover.webp";
        crewPosition.innerHTML = "PILOT";
        crewName.innerHTML = "VICTOR GLOVER";
        crewDesc.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
        crewNav1.classList.remove("nav-circles-active");
        crewNav2.classList.remove("nav-circles-active");
        crewNav3.classList.add("nav-circles-active");
        crewNav4.classList.remove("nav-circles-active");
    }
    crewNav4.onclick = function(){
        crewImage.src = "assets/crew/image-anousheh-ansari.webp";
        crewPosition.innerHTML = "FLIGHT ENGINEER";
        crewName.innerHTML = "ANOUSHEH ANSARI";
        crewDesc.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
        crewNav1.classList.remove("nav-circles-active");
        crewNav2.classList.remove("nav-circles-active");
        crewNav3.classList.remove("nav-circles-active");
        crewNav4.classList.add("nav-circles-active");
    }
}
//End of crew page

//Start of technology page
console.log("Script loaded tech page");

var techBtn1 = document.getElementById("num1");
var techBtn2 = document.getElementById("num2");
var techBtn3 = document.getElementById("num3");
var tecImage = document.getElementById("tech-image");
var techMain = document.getElementById("tech-main-txt");
var techDesc = document.getElementById("tech-desc");

var sWidth = window.innerWidth;

techBtn1.classList.add("num-active");

techBtn1.addEventListener('click', changeImg1);
function changeImg1(){
    if (sWidth >= 1280){
        tecImage.style.backgroundImage = "url(/assets/technology/image-launch-vehicle-portrait.jpg)";
    }
    else if (sWidth >= 768){
        tecImage.style.backgroundImage = "url(/assets/technology/image-launch-vehicle-landscape.jpg)";
    }
    else if (sWidth >= 375){
        tecImage.style.backgroundImage = "url(/assets/technology/image-launch-vehicle-landscape.jpg)";
    }
    techMain.innerHTML = "LAUNCH VEHICLE";
    techDesc.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    techBtn1.classList.add("num-active");
    techBtn2.classList.remove("num-active");
    techBtn3.classList.remove("num-active");
}

techBtn2.addEventListener('click', changeImg2);
function changeImg2(){
    if (sWidth >= 1280){
        tecImage.style.backgroundImage = "url(/assets/technology/image-spaceport-portrait.jpg)";
    }
    else if (sWidth  >= 768){
        tecImage.style.backgroundImage = "url(/assets/technology/image-spaceport-landscape.jpg)";
    }
    else if (sWidth  >= 375){
        tecImage.style.backgroundImage = "url(/assets/technology/image-spaceport-landscape.jpg)";
    }
    techMain.innerHTML = "SPACEPORT";
    techDesc.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    techBtn1.classList.remove("num-active");
    techBtn2.classList.add("num-active");
    techBtn3.classList.remove("num-active");
}

techBtn3.addEventListener('click', changeImg3);
function changeImg3(){
    if (sWidth  >= 1280){
        tecImage.style.backgroundImage = "url(/assets/technology/image-space-capsule-portrait.jpg)";
    }
    else if (sWidth  >= 768){
        tecImage.style.backgroundImage = "url(/assets/technology/image-space-capsule-landscape.jpg)";
    }
    else if (sWidth  >= 375){
        tecImage.style.backgroundImage = "url(/assets/technology/image-space-capsule-landscape.jpg)";
    }
    techMain.innerHTML = "SPACE CAPSULE";
    techDesc.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    techBtn1.classList.remove("num-active");
    techBtn2.classList.remove("num-active");
    techBtn3.classList.add("num-active");
}
console.log("Sript running complete");

//End of technology page
