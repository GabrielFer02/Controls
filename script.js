const formControls = document.getElementById("controls");
const button = document.querySelector(".button");
const style = document.querySelector(".css");

const styleChange = {
  button: button,
  backgroundColor(value) {
    this.button.style.backgroundColor = value;
  },
  height(value) {
    this.button.style.height = value + "px";
  },
  width(value) {
    this.button.style.width = value + "px";
  },
  text(value) {
    this.button.innerText = value;
  },
  color(value) {
    this.button.style.color = value;
  },
  border(value) {
    this.button.style.border = value;
  },
  borderRadius(value) {
    this.button.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.button.style.fontFamily = value;
  },
  fontSize(value) {
    this.button.style.fontSize = value + "rem";
  },
};

function cssText() {
  style.innerHTML =
    "<span>" +
    button.style.cssText.split("; ").join(";</span><span>") +
    "</span>";
}

function handleChange(event) {
  const value = event.target.value;
  const name = event.target.name;

  styleChange[name](value);
  cssText();
}

formControls.addEventListener("change", handleChange);
