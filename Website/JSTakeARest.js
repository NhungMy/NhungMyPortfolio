var isShowGridItem = true;

$(document).ready(function() {
   
    var gridButton = document.getElementById("myGridButton");
    gridButton.addEventListener('click', function(e) {
        if (isShowGridItem) {
            $("#myGridButton").attr("src", "image/menu.png");
            isShowGridItem = false;
        } else {
            $("#myGridButton").attr("src", "image/GridButton.png");
            isShowGridItem = true;
        }
    });

});

