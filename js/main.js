function openNav() {
    if ( window.matchMedia("(max-width: 990px)").matches ) {
        document.getElementById("menu-items").style.width = "100%";
        document.getElementById("menu-icon").style.opacity = "0%";
    }

    else {
        document.getElementById("menu-items").style.width = "250px";
        document.getElementById("menu-icon").style.opacity = "0%";
    }
}

function closeNav() {
    document.getElementById("menu-items").style.width = "0";
    document.getElementById("menu-icon").style.opacity = "100%";
}