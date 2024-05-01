// Header overlay

document.querySelector(".overlay_hide").onclick = function () {
  document.querySelector(".header_overlay").classList.toggle("hide");
};

document.querySelector(".overlay_close").onclick = function () {
  document.querySelector(".header_overlay").classList.toggle("hide");
};

// Dark Theme

document.querySelector(".toggle").onclick = function () {
  document.getElementById("dark").classList.toggle("dark");
};

// Sidebar

document.getElementById("sidebar_hidden").onclick = function () {
  document.getElementById("sidebar").style.display = "none";
};

// Countup

$(".counter").countUp({
  time: 5000,
});
