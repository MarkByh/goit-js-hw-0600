function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.getElementById("boxes");
const num = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
   boxes.innerHTML = "";
  const number = num.value;
  const allDiv = [];
  const creatediv = document.createElement("div");
  for (let i = 0; i < number; i++) {

    let size = 30 + 10 * i;
    
    creatediv.insertAdjacentHTML("beforeend", `<div class = "color-boxes" style = "width:${size}px; border: solid 1px black; ;
    height: ${size}px; background-color: ${getRandomHexColor()};"></div>` );
  };
  boxes.insertAdjacentElement("beforeend",creatediv )

}

function destroyBoxes() {
  boxes.innerHTML = "";
  num.value = 1;
}



