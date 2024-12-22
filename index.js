const pinGenerateBtn = document.getElementsByClassName("generate-btn");
let displaPin = document.getElementById("displayGeneratedPin");

for (i = 0; i < pinGenerateBtn.length; i++) {
  const btn = pinGenerateBtn[i];

  btn.addEventListener("click", function () {
    const randomPin = Math.floor(1000 + Math.random() * 9000);
    displaPin.value = randomPin;
  });
}

let displayNum = document.getElementById("displayNum");
const clickNum = function (getNum) {
  displayNum.value = displayNum.value + getNum;
};

const submitBtn = document.getElementById("submit-btn");
const notifyRightBtn = document.getElementById("notify-right");
const notifyWrongBtn = document.getElementById("notify-wrong");

let tryCountEl = document.getElementById("try-count");
let tryCount = parseInt(tryCountEl.innerText);
submitBtn.addEventListener("click", function () {
  if (displayNum.value === displaPin.value) {
    displaPin.value = "";
    displayNum.value = "";
    notifyRightBtn.classList.add("visible");
    notifyWrongBtn.classList.remove("visible");
  } else if (displayNum.value !== displaPin.value) {
    tryCount--;
    tryCountEl.innerText = tryCount;
    if (tryCount === 0) {
      submitBtn.setAttribute("disabled", true);
    }
    displaPin.value = "";
    displayNum.value = "";
    notifyWrongBtn.classList.add("visible");
    notifyRightBtn.classList.remove("visible");
  }
});

const clearDisplay = function () {
  displayNum.value = "";
};

const backSpace = function () {
  displayNum.value = displayNum.value.slice(0, -1);
};
