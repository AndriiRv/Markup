$(document).ready(function () {

    let bodySelector = $("body");
    let menuButton = $("#open-close-menu-button");
    let ul = $("#menu");

    let isOpen = true;

    menuButton.on('click', function () {
        if (isOpen) {
            bodySelector.css("overflow", "hidden");
            isOpen = false;
        } else {
            bodySelector.css("overflow", "auto");
            isOpen = true;
        }

        ul.on('click', function () {
            menuButton.click();
            bodySelector.css("overflow", "auto");

            isOpen = true;
        });
    });
});