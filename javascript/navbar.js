const navMobile = document.querySelector(".navbar__categories--mobile-hidden");
const hamburger = document.querySelector(".navbar__hamburger");
const container = document.querySelector(".navbar__container");
const closeButton = document.querySelector(".close");

hamburger.addEventListener("click", function () {
  navMobile.classList.add("navbar__categories--mobile");
  navMobile.classList.remove("navbar__categories--mobile-hidden");
  container.classList.remove("navbar__container");
  container.classList.add("navbar__categories--mobile-hidden");
});

closeButton.addEventListener("click", function () {
  navMobile.classList.remove("navbar__categories--mobile");
  navMobile.classList.add("navbar__categories--mobile-hidden");
  container.classList.add("navbar__container");
  container.classList.remove("navbar__categories--mobile-hidden");
});

const takeATourButton = document.querySelector("#tour__button");

takeATourButton.addEventListener("click", function () {

  window.scrollTo("2400", "1300");

});

const learnButton = document.querySelector("#learn__button");

learnButton.addEventListener("click", function() {
  window.scrollTo("3000", "2500")
})


const person = document.querySelector("#person");

person.addEventListener("click", function() {
  window.location.href = "https://belenjn.github.io/hotel-miranda/#contact"
})
