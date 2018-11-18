/* Set the width of the side navigation to 1000px */
function openNav(x) {
  var width = window.innerWidth;

  if (width <= 700) {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav").style.height = "50%";
  } else {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("mySidenav").style.height = "100%";
  }
  
  document.getElementById("myPageTitle").style.display = "none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
