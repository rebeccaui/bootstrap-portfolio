// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Animated Hamburger
//Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var navDropdown = document.querySelector(".nav-link");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  
    navDropdown.setAttribute("display", "hidden")
});

/* Pure CSS Hamburger
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
mainNav.classList.toggle("active");
});*/