// deno-lint-ignore-file

const main = () => {
  const text = "hello adil";
  const para = document.querySelector("#typing-text");
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text.at(i);
    para.appendChild(span);
  }

  let index = 0;
  document.addEventListener("keydown", (event) => {
    if (event.key === para.childNodes[index].innerText) {
      para.childNodes[index].style = "background-color: #D3E6FB";
    }
    console.log(event.key);

    index += event.key === "Backspace" ? -1 : 1;
  });
};

window.onload = main;
