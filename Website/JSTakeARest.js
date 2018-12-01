var isShowGridListItem = false;

$(document).ready(function() {
    var gridButton = document.getElementById("myGridButton");

    gridButton.addEventListener('click', function(e) {
        if (isShowGridListItem) {
            $("#myGridButton").attr("src", "image/Grid-window-ic.svg");
            var windowView = document.getElementById("window-container");
            var listView = document.getElementById("list-container");
            windowView.style.display = "none";
            listView.style.display = "block";
            isShowGridListItem = false;
        } else {
            console.log("Click me");
            $("#myGridButton").attr("src", "image/Grid-list-ic.svg");
            var windowView = document.getElementById("window-container");
            var listView = document.getElementById("list-container");
            windowView.style.display = "block";
            listView.style.display = "none";
            isShowGridListItem = true;
        }
    });

});

