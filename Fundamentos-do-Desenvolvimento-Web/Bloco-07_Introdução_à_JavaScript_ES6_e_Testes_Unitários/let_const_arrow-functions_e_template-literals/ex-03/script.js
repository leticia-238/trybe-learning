const buttonClickCount = document.getElementById("count-clicks");
const textClickCount = document.getElementById("number-clicks");
textClickCount.innerText = "Número de clicks: 0";
let clickCount = 0;

buttonClickCount.addEventListener("click", () => {
  clickCount += 1;
  textClickCount.innerText = `Número de clicks: ${clickCount}`;
});
