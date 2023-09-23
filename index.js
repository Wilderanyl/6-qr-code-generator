const qrImageElement = document.getElementById("qr-img");
const qrContainerElement = document.getElementById("qr-container");
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const textResult = document.querySelector("[data-text]");
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function handleClick(e) {
  e.preventDefault();
  if (inputElement.value === "") {
    inputElement.classList.add("errorInput");
  } else {
    textResult.innerHTML.remove;
    inputElement.classList.remove("errorInput");
    qrImageElement.src = `${url}${inputElement.value}`;
    qrContainerElement.style.display = "flex";
    textResult.innerHTML = `Scan here to get into the  ${inputElement.value}`;
    inputElement.value = "";
  }
}

formElement.addEventListener("submit", handleClick);
