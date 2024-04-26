// Header overlay JS

document.querySelector(".overlay_hide").onclick = function () {
  document.querySelector(".header_overlay").classList.toggle("hide");
};

document.querySelector(".overlay_close").onclick = function () {
  document.querySelector(".header_overlay").classList.toggle("hide");
};

document.querySelector(".toggle").onclick = function () {
  document.getElementById("dark").classList.toggle("dark");
};

$(".counter").countUp({
  time: 5000,
});
