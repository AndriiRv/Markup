document.getElementById("mobile-menu").onclick = function () {
    let isMenuOpen = true;
    let ul = document.getElementById('menu');

    ul.addEventListener('click', function () {
        if (isMenuOpen) {
            document.getElementById("open-close-menu-button").click();
            isMenuOpen = false;
        }
    });
}