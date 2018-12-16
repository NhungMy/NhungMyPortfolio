var isShowSideBar = false;


  function Opensidenav(){
    if (isShowSideBar == false) {
      document.getElementById("mySidenav").classList.add("open");
      document.getElementsByClassName("img-action-menu")[0].src = "image/Back-ic.svg";
      document.getElementById("myPageTitle").style.display = 'none';
      isShowSideBar = true;
    }
    else {
      document.getElementById("mySidenav").classList.remove("open");
      document.getElementsByClassName("img-action-menu")[0].src = "image/Menu-ic.svg";
      document.getElementById("myPageTitle").style.display = "block";
      isShowSideBar = false;
    }
  };

  window.onclick = function (event){
    if (event.target.id != "mySidenav" &&
        event.target.className != "img-action-menu") {
      document.getElementById("mySidenav").classList.remove("open");
      document.getElementsByClassName("img-action-menu")[0].src = "image/Menu-ic.svg";
      document.getElementById("myPageTitle").style.display = "block";
      isShowSideBar = false;
    }
  };