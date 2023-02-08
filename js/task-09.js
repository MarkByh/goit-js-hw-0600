function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}

const body = document.body;
const colorInfo= document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', chengeColor)
function chengeColor(event) {
  const  getRandom = getRandomHexColor();
    body.style.backgroundColor = getRandom;
    colorInfo.textContent = getRandom;
}
