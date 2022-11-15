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

const searchButtonNavbar = document.querySelector(".navbar__search");
const inputNavbar = document.querySelector(".search__hidden");

searchButtonNavbar.addEventListener("click", function () {
  inputNavbar.classList.remove("search__hidden");
  inputNavbar.classList.add("search__visible");
});

inputNavbar.addEventListener("change", function (e) {
  const valueInput = e.target.value;

  if (valueInput.includes("room")) {
    window.location.href = "rooms.html";
    inputNavbar.value = "";
  } else if (valueInput.includes("services")) {
    window.scrollTo("2400", "6000");
    inputNavbar.value = "";
  } else if (valueInput.includes("video")) {
    window.location.href = "about.html";
    inputNavbar.value = "";
  } else if (valueInput.includes("offers")) {
    window.location.href = "offers.html";
    inputNavbar.value = "";
  } else if (valueInput.includes("contact")) {
    window.location.href = "contact.html";
    inputNavbar.value = "";
  } else if (valueInput.includes("luxury")) {
    window.location.href = "rooms.html"
    inputNavbar.value = "";
  } else {
    window.scrollTo("2400", "2700");
    inputNavbar.value = "";
  }
});
