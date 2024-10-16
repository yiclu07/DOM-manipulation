const bussy = document.getElementById("bussyblast");
const amogus = document.getElementById("amogus");
const goku = document.getElementsByClassName("drippy");
const button = document.getElementById("reset");
const color = document.getElementById("color");
const gTime = document.getElementById("gokuTime");
var audio = new Audio('assets/ultraInstinct.mp3');

bussy.addEventListener("click", onClick);
amogus.addEventListener("click", onClick);

color.addEventListener("click", reColor);
button.addEventListener("click", reset);

drippy();


function reColor(e) {
    bussy.style.backgroundColor = "purple";
    amogus.style.backgroundColor = "red";    
};

function onClick(e) {
    console.log(e.target)
};

function reset(e) {
    bussy.style.backgroundColor = "white";
    amogus.style.backgroundColor = "white";
};

function uiDrip(e) {
    audio.play();
    drippy();
};


function drippy(e) {
const dupe = document.createElement("img");
dupe.setAttribute("src", "assets/dripGoku.png");
dupe.setAttribute("class", "drippy");
dupe.addEventListener("click", uiDrip);
gTime.appendChild(dupe);
};