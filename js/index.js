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

document.getElementById("sidebar_close").onclick = function () {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("sidebar_hide").style.display = "block";
};

document.getElementById("sidebar_hide").onclick = function () {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("sidebar_hide").style.display = "none";
};

// Countup

$(".counter").countUp({
  time: 5000,
});
