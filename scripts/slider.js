// Слайдер меню
const slideFirst = document.querySelector(".slider__item_first");
const slideSecond = document.querySelector(".slider__item_second");
const slideThird = document.querySelector(".slider__item_third");
const sliderBtnFirst = document.querySelector(".slider__button_first");
const sliderBtnSecond = document.querySelector(".slider__button_second");
const sliderBtnThird = document.querySelector(".slider__button_third");

sliderBtnFirst.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.add("slide-current");
  slideSecond.classList.remove("slide-current");
  slideThird.classList.remove("slide-current");
  sliderBtnFirst.classList.add("current");
  sliderBtnSecond.classList.remove("current");
  sliderBtnThird.classList.remove("current");
});

sliderBtnSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("slide-current");
  slideSecond.classList.add("slide-current");
  slideThird.classList.remove("slide-current");
  sliderBtnFirst.classList.remove("current");
  sliderBtnSecond.classList.add("current");
  sliderBtnThird.classList.remove("current");
});

sliderBtnThird.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("slide-current");
  slideSecond.classList.remove("slide-current");
  slideThird.classList.add("slide-current");
  sliderBtnFirst.classList.remove("current");
  sliderBtnSecond.classList.remove("current");
  sliderBtnThird.classList.add("current");
});
