let share = document.querySelector(".share");
let social = document.querySelector(".social");
let path = document.getElementById("path");

share.addEventListener('click', () => {
    if (social.classList.contains("hide")) {
        social.classList.remove("hide");
        share.style.backgroundColor = "hsl(214, 17%, 51%)"
        path.style.fill = "hsl(210, 46%, 95%)"
    } else {
        social.classList.add("hide");
        share.style.backgroundColor = "hsl(210, 46%, 95%)"
        path.style.fill = "hsl(214, 17%, 51%)"
    }
});