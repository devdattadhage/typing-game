// deno-lint-ignore-file

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
  const text = "Welcome To Typing Club";
  const para = generatePara(text);

  let index = 0;
  document.addEventListener("keydown", (event) => {
    if (event.key === "Shift") return;

    const spanElements = para.children;
    if (event.key === "Backspace" && index > 0) {
      index--;
      spanElements[index].classList.remove("validKey", "invalidKey");
    } else if (
      index < spanElements.length &&
      event.key === spanElements[index].innerText
    ) {
      spanElements[index].classList.add("validKey");
      index++;
    } else if (index < spanElements.length) {
      spanElements[index].classList.add("invalidKey");
      index++;
    }

    console.log(event.key);
  });
};

window.onload = main;
