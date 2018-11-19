var isShowSideBar = false;

/* Set the width of the side navigation to 1000px */
function openNav() {
  isShowSideBar = true;
  document.getElementById("mySidenavItem").style.visibility = "visible";

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
  document.getElementById("mySidenav").style.width = "120px";
}

window.addEventListener('resize', function(event){
  if (isShowSideBar) {
    openNav();
  }
});
