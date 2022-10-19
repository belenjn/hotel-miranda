const takeATourButton = document.querySelector("#tour__button");

takeATourButton.addEventListener("click", function () {
  window.scrollTo("2400", "1300");
});

const learnButton = document.querySelector("#learn__button");

learnButton.addEventListener("click", function () {
  window.scrollTo("3000", "2500");
});



inputNavbar.addEventListener("change", function (e) {
  e.target.value ? (window.location.href = "rooms.html") : "";
});

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  window.location.href = "rooms.html";
});

const buttonVideo = document.querySelector("#button__video");

buttonVideo.addEventListener("click", function () {
  window.location.href = "rooms.html";
});

const topButton = document.querySelector(".top__button");

topButton.addEventListener("click", function () {
  window.scrollTo("0", "0");
});
