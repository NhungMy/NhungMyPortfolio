var isShowWindowItem = false;

$(document).ready(function() {
    var gridButton = document.getElementById("myGridButton");

    gridButton.addEventListener('click', function(e) {
        if (isShowWindowItem) {
            $("#myGridButton").attr("src", "image/Grid-window-ic.svg");
            var windowView = document.getElementById("window-container");
            var listView = document.getElementById("list-container");
            var textlistView = document.getElementById("text-list-view");
            var textwindowView = document.getElementById("text-window-view");
            windowView.style.display = "none";
            listView.style.display = "block";
            textlistView.style.display="block";
            textwindowView.style.display="none";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            isShowWindowItem = false;
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
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            isShowWindowItem = true;
        }
    });

});

