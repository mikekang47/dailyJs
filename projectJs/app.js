const h1 = document.querySelector(".hello:first-child h1");

function handleTitlleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitlleClick);