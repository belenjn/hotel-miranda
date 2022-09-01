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
})