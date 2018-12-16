var isShowWindowItem = false;

    // gridButton.addEventListener('click', function(e) {
    function changelayout(){
        if (isShowWindowItem == true) {
            document.getElementById("myGridButton").src ="image/Grid-window-ic.svg";
            document.getElementById("window-container").style.display = "none";
            document.getElementById("list-container").style.display = "block";
            document.getElementById("text-list-view").style.display="block";
            document.getElementById("text-window-view").style.display="none";
            document.documentElement.scrollTop = 0;
            isShowWindowItem = false;
        } else {
            document.getElementById("myGridButton").src ="image/Grid-list-ic.svg";
            document.getElementById("window-container").style.display = "block";
            document.getElementById("list-container").style.display = "none";
            document.getElementById("text-list-view").style.display="none";
            document.getElementById("text-window-view").style.display="block";
            document.documentElement.scrollTop = 0;
            isShowWindowItem = true;
        }
    };


