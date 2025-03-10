const generatePara = (text) => {
  const para = document.querySelector("#typing-text");
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    para.appendChild(span);
  });

  return para;
};

const handleBackspace = (index, spanElement) => {
  if (index <= 0) {
    return index;
  }

  spanElement.classList.remove("validKey", "invalidKey");

  return index - 1;
};

const handleShift = (index) => {
  return index;
};

const handleNormalKey = (index, spanElement, key) => {
  if (key === spanElement.innerText) {
    spanElement.classList.add("validKey");
    return index + 1;
  }

  spanElement.classList.add("invalidKey");
  return index + 1;
};

const handleKeysValid = (key, index, spanElements) => {
  const specialKey = {
    Backspace: handleBackspace,
    Shift: handleShift,
  };

  if (specialKey[key]) {
    return specialKey[key](index, spanElements[index - 1]);
  }

  return handleNormalKey(index, spanElements[index], key);
};

const main = () => {
  const text = "Welcome To Typing Club";
  const para = generatePara(text);

  let index = 0;
  document.addEventListener("keydown", (event) => {
    index = handleKeysValid(event.key, index, para.children, event);
    console.log(event.key);
  });
};

window.onload = main;
