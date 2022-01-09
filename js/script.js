//Start of navigation bar js
var menu1 = new Image;
menu1.src=("assets/shared/icon-hamburger.svg");
var menu2 = new Image;
menu2.src=("assets/shared/icon-close.svg");

var navLinks = document.getElementById("nav-links");
var hamMenu = document.getElementById("toggle-ham-menu");
var hamMenuIcon = document.getElementById("toggle-ham-menu").appendChild(menu1);

function imgClick(){
    console.log("HI");
    if (hamMenuIcon.src.match("assets/shared/icon-hamburger.svg")){
        hamMenuIcon.src = "assets/shared/icon-close.svg";
        navLinks.classList.add("navbar-links-active");
    }
    else{
        hamMenuIcon.src = "assets/shared/icon-hamburger.svg";
        navLinks.classList.remove("navbar-links-active");
    }
    
}
//End of navigation bar js

//No js for homepage

//Start of destination 
var moonBtn = document.getElementById("moon-btn");
var marsBtn = document.getElementById("mars-btn");
var europaBtn = document.getElementById("europa-btn");
var titanBtn = document.getElementById("titan-btn");

var planet = document.getElementById("planet").innerHTML;
//End of destination page