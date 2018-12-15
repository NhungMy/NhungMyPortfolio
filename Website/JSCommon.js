var isShowSideBar = false;

$(document).ready(function() {
  $("#myButtonNavi").click(function() {
    if (isShowSideBar == false) {
      $("#mySidenav").addClass("open");
      $(".img-action-menu").attr("src", "image/Back-ic.svg");
      isShowSideBar = true;
      document.getElementById("myPageTitle").style.display = 'none';
      
    } else {
      $("#mySidenav").removeClass("open");
      $(".img-action-menu").attr("src", "image/Menu-ic.svg");
      isShowSideBar = false;
      document.getElementById("myPageTitle").style.display = "block";
    }
  });

  //auto hide menu when click anywhere
  $(document).on("click", function(event) {
    if (isShowSideBar == true &&
      $(event.target).closest("#myButtonNavi").length == false ) // check click on My navi button => do not do anything
     {
      $("#mySidenav").removeClass("open");
      $(".img-action-menu").attr("src", "image/Menu-ic.svg");
      isShowSideBar = false;
      document.getElementById("myPageTitle").style.display = "block";
    }
  });
});
