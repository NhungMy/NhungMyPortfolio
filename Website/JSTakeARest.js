var isShowGridListItem = false;

$(document).ready(function() {
    var gridButton = document.getElementById("myGridButton");

    gridButton.addEventListener('click', function(e) {
        if (isShowGridListItem) {
            $("#myGridButton").attr("src", "image/Grid-window-ic.svg");
            var windowView = document.getElementById("window-container");
            var listView = document.getElementById("list-container");
            var textlistView = document.getElementById("text-list-view");
            var textwindowView = document.getElementById("text-window-view");
            windowView.style.display = "none";
            listView.style.display = "block";
            textlistView.style.display="block";
            textwindowView.style.display="none";
            isShowGridListItem = false;
        } else {
            $("#myGridButton").attr("src", "image/Grid-list-ic.svg");
            var windowView = document.getElementById("window-container");
            var listView = document.getElementById("list-container");
            var textlistView = document.getElementById("text-list-view");
            var textwindowView = document.getElementById("text-window-view");
            windowView.style.display = "block";
            listView.style.display = "none";
            textlistView.style.display="none";
            textwindowView.style.display="block";
            isShowGridListItem = true;
        }
    });

});

