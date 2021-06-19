window.onload = function () {
    removeStartAnimationDivs();
}

function removeStartAnimationDivs() {
    setTimeout(() => {
        var animContainer = document.getElementById("start-animation-container");
        animContainer.parentNode.removeChild(animContainer);
    }, 4500);
}