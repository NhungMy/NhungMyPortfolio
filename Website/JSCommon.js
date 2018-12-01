var isShowSideBar = false;

$(document).ready(function() {
  $("#myButtonNavi").click(function() {
    if (isShowSideBar) {
      $("#mySidenav").removeClass("open");
      $(".img-action-menu").attr("src", "image/Menu-ic.svg");
      isShowSideBar = false;
      document.getElementById("myPageTitle").style.display = "block";
    } else {
      $("#mySidenav").addClass("open");
      $(".img-action-menu").attr("src", "image/Back-ic.svg");
      isShowSideBar = true;
      document.getElementById("myPageTitle").style.display = 'none';
    }
  });

  //auto hide menu when click anywhere
  $(document).on("click", function(e) {
    if (
      !$(e.target).closest("#myButtonNavi").length ||
      !$(e.target).closest("#mySidenav").length
    ) {
      $("#mySidenav").removeClass("open");
      $(".img-action-menu").attr("src", "image/Menu-ic.svg");
      isShowSideBar = false;
      document.getElementById("myPageTitle").style.display = "block";
    }
  });
});
