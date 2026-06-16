// Бургер-меню: [открытие и закрытие]
var burger = document.getElementById("burger");
var nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  burger.classList.toggle("is-open");
  nav.classList.toggle("is-open");
});

// [Закрытие] меню при клике
var links = nav.querySelectorAll("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    burger.classList.remove("is-open");
    nav.classList.remove("is-open");
  });
}

// Flip-карточки для раздела "О нас (about)" [мобильная версия]
var flipBtns = document.querySelectorAll(".flip-btn");
for (var i = 0; i < flipBtns.length; i++) {
  flipBtns[i].addEventListener("click", function (e) {
    e.preventDefault();
    var card = this.closest(".flip-card");
    if (card) {
      card.classList.toggle("is-flipped");
    }
  });
}