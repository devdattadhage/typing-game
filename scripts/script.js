const isValidKey = (key, element) => key === element.innerText;

const displaySpeed = (speed) => {
  const score = document.querySelector("#score");
  const para = document.createElement("p");
  para.textContent = ` ${speed} wpm`;
  score.appendChild(para);
};

class TypingGame {
  constructor(elements) {
    this.elements = elements;
  }

  calculateSpeed(totalChars, time) {
    return Math.floor(totalChars / 5 / (time / 1000 / 60));
  }

  handleNormalKey(index, key) {
    const element = this.elements[index];

    if (isValidKey(key, element)) {
      element.classList.add("validKey");
      return index + 1;
    }

    element.classList.add("invalidKey");
    return index + 1;
  }

  handleBackspace(index) {
    if (index <= 0) {
      return index;
    }

    const element = this.elements[index - 1];
    element.classList.remove("validKey", "invalidKey");
    return index - 1;
  }
}

const generatePara = (text) => {
  const para = document.querySelector("#typing-text");
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    para.appendChild(span);
  });

  return para;
};

const main = () => {
  const text = "Welcome To Typing Club !!";
  const spanElements = generatePara(text);
  const typingGame = new TypingGame(spanElements.children);
  const startTime = Date.now();
  let index = 0;

  document.addEventListener("keydown", (event) => {
    const invalidKeys = ["Shift", "Meta", "Escape", "Alt", "Control"];
    const key = event.key;

    if (invalidKeys.includes(key) || index > text.length) return;
    if (index === text.length) {
      const speed = typingGame.calculateSpeed(
        index + 1,
        Date.now() - startTime
      );
      displaySpeed(speed);
      return;
    }
    if (key === "Backspace") {
      index = typingGame.handleBackspace(index);
      return;
    }

    index = typingGame.handleNormalKey(index, key);
    return;
  });
};

window.onload = main;
