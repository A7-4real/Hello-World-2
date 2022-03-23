const el = document.querySelector("#greet");
const input = document.querySelector("#name");

input.addEventListener("keydown", (e) => {
  el.innerText = "Hello" + `${e.code}`;
});
