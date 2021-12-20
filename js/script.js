console.log("Cześć!");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let button__themeName = document.querySelector(".js-button__themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    button__themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});
