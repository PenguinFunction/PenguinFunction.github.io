window.onload = function () {
    // Disable scrolling on startup
    document.body.style.overflowY = "hidden";
    document.getElementsByTagName("header")[0].style.position = "fixed";

    removeStartupAnimDivs();
}

function removeStartupAnimDivs() {
    setTimeout(() => {
        document.body.style.overflowY = "initial";
        document.getElementsByTagName("header")[0].style.position = "inherit";
        var animContainer = document.getElementById("start-animation-container");
        animContainer.parentNode.removeChild(animContainer);
    }, 3000);
}
