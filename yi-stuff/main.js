const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const blueButton = document.getElementById("blue-btn");
const counterBox = document.getElementById("counter-container");
const incrementButton = document.getElementById("increment-btn");

function onClick(e) {
  console.log(e.target);
}

box1.addEventListener("click", onClick);
box2.addEventListener("click", onClick);

blueButton.addEventListener("click", (e) => {
  box1.style.color = "pink";
});

function incrementCounter(e) {
  counterBox.innerHTML = Number(counterBox.innerHTML) + 1;
}

incrementButton.addEventListener("click", incrementCounter);

const nodeMap = document.getElementById("myDiv").attributes;
let text = "";
for (let i = 0; i < nodeMap.length; i++) {
  text += nodeMap[i].name + " = " + nodeMap[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
