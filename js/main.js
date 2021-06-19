function openNav() {
    if ( window.matchMedia("(max-width: 990px)").matches ) {
        document.getElementById("menu-items").style.width = "100%";
    }

    else {
        document.getElementById("menu-items").style.width = "200px";
    }
}

function closeNav() {
    document.getElementById("menu-items").style.width = "0";
}