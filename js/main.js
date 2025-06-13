$(document).ready(function() {
    $('#next').focus();
});

var currentIndex = 1; 

$("#loveButton").click(function() {
    window.location.href = "./Auother.html";
});

$("#poetryBugtton").click(function() {
    if (currentIndex == 3) {
        window.location.href = "./index1.html";
    }
    $('.first_page_root .first_page_item:nth-child(' + currentIndex + ')').addClass('d-none');
    $('.first_page_root .first_page_item:nth-child(' + currentIndex + ')').removeClass('d-none');
});

$(document).on('keydown', function(e) {
    switch (e.key) {
        case "ArrowDown":
            if (document.activeElement.id === "") {
                return $('#loveButton').focus();
            } else if (document.activeElement.id === "loveButton") {
                return $('#poetryButton').focus();
            } else {
                return;
            }
        case "ArrowUp":
            if (document.activeElement.id === "poetryButton") {
                return $('#loveButton').focus();
            } else {
                return;
            }
        default:
            return;
    }
});

$("#poetryButton").click(function() {
    window.location.href = "./index1.html";
});