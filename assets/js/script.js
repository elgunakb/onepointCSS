const a2 = document.querySelector(".a2");
const mainPopup = document.querySelector(".main-popup");
const close = document.querySelector(".popup-close");
const form = document.querySelector(".popup-content");
const username = document.querySelector("#username");
const message = document.querySelector(".message");

const a1 = document.querySelector(".a1");
const mainReg = document.querySelector(".main-reg");
const close2 = document.querySelector(".reg-close");
const form2 = document.querySelector(".reg-content");
const message2 = document.querySelector(".message2");
const username2 = document.querySelector("#username2");
const fullname = document.querySelector("#fullname");

a2.addEventListener("click", () => {
  mainPopup.style.display = "block";
});
close.addEventListener("click", () => {
  mainPopup.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  const usernamePattern = /^[a-z A-Z 1-9]{4,20}$/;

  if (usernamePattern.test(username)) {
    message.textContent = "Daxil olunur ";
  } else {
    message.textContent = "Yanlish!";
  }
});

a1.addEventListener("click", () => {
  mainReg.style.visibility = "visible";
});
close2.addEventListener("click", () => {
  mainReg.style.visibility = "hidden";
});
form2.addEventListener("submit", (z) => {
  z.preventDefault();
  const username2 = form2.username2.value;
  const username2Pattern = /^[a-z A-Z 1-9]{4,20}$/;

  if (username2Pattern.test(username2)) {
    message2.textContent = "Daxil olunur ";
    if (fullnamePattern.test(fullname)) {
      message2.textContent = "Daxil olunur ";
    }
  } else {
    message2.textContent = "Yanlish!";
  }
});
