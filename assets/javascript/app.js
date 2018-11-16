// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
mainNav.classList.toggle("active");
});