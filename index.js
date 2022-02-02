// const popupOpenButton = document.querySelector(".send-us");
// const popup = document.querySelector(".popup");
// const popupCloseButton = document.querySelector(".popup__close");
// const formElement = document.querySelector(".form");

// function openPopup() {
//   popup.classList.add("popup_opened");
// }

// function closePopup() {
//   popup.classList.remove("popup_opened");
// }

// popupOpenButton.addEventListener("click", openPopup);
// popupCloseButton.addEventListener("click", closePopup);

var btns = document.getElementsByClassName("send-us");
var par = document.getElementsByClassName("popup");
btns[0].onclick = function () {
  par[0].classList.add("popup_opened");
};
btns[1].onclick = function () {
  par[0].classList.remove("popup_opened");
};
