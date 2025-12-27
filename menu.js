// If <nav> has id="myTopnav", use this:
function toggleMenu() {
  var nav = document.getElementById("myTopnav");
  nav.classList.toggle("responsive");
}

// If you prefer to select by class:
function toggleMenu() {
  var nav = document.querySelector(".site-nav");
  nav.classList.toggle("responsive");
}
