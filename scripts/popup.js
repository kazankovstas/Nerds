const open_popup = document.querySelector(".send-us");
const close_popup = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const form = popup.querySelector(".form");
const login = form.querySelector("[name=login]");
const email = form.querySelector("[name=email]");
const form_button = form.querySelector(".button__send");
let isStorageSupport = true;
let storage = "";
const open_popup_map = document.querySelector(".contacts__marker");
const popupmap = document.querySelector(".popup-map");

// Убеждаемся, что localStorage существует
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

// Открытие попапа формы
open_popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup_opened");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

// Закрытие попапа
close_popup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup_opened");
  form.classList.remove("modal-error");
});

// Закрытие попапа клавишей Esc
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (popup.classList.contains("popup_opened")) {
      evt.preventDefault();
      popup.classList.remove("popup_opened");
      form.classList.remove("modal-error");
    }
  }
});

// Анимация при ошибке заполнения формы
form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

// Открытие попапа карты
open_popup_map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("map_open");
});

// Закрытие карты кликом вне ее область
window.addEventListener("mousedown", function (evt) {
  if (evt.target.closest(".popupmap") === null) {
    popupmap.classList.remove("map_open");
  }
});
