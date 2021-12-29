{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const buttonThemeName = document.querySelector(".js-button__themeName");

        body.classList.toggle("body--dark");
        buttonThemeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}