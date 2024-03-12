function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]")
const boxes = document.querySelector("#boxes");
btnCreate.addEventListener("click", checkCondition);

function checkCondition() {
  if (inputNumber.value < 1 || inputNumber.value > 100) {
    inputNumber.value = "";
    return;
  } else {
    boxes.innerHTML = "";
    createBoxes(inputNumber.value);
  }
  inputNumber.value = "";
}
function createBoxes(amount) {
  
 const boxesCollection = [];
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${30 + (i - 1) * 10}px`;
      box.style.height = `${30 + (i - 1) * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      
      boxesCollection.push(box);
    }
     boxes.append(...boxesCollection);
}
btnDestroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = "";
}