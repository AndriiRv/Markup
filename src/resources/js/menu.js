let maxMobileWidth = 800;

function enableMenu(that) {
    if (window.screen.width <= maxMobileWidth) {

        that.classList.toggle("change");

        let navigationMenu = document.getElementById("navigation");

        if (that.classList.contains("change")) {
            navigationMenu.style.display = "flex";
            navigationMenu.style.flexDirection = "column";
            navigationMenu.classList.add("showMenu");
            navigationMenu.classList.remove("hideMenu");
        } else {
            navigationMenu.classList.add("hideMenu");
            navigationMenu.classList.remove("showMenu");

            setTimeout(() => {
                navigationMenu.style.display = "none";
            }, 200);
        }
    }
}