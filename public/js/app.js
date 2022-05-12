document.addEventListener('DOMContentLoaded', function() {
    
});

const button = document.getElementById("random-button");
const postsArray = document.getElementsByClassName("profile-posts");
let counter = 0;

button.addEventListener("click", function() {
    counter += 1;
    console.log(counter);
    for (values in postsArray) {
        if (counter % 2 === 0) {
            let randomColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
            postsArray[values].style["background-color"] = randomColor;
        } else {
            postsArray[values].style["background-color"] = "#151820";
        }
    }
});

const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", function() {
    let element = document.getElementById("menu-list");
    element.classList.toggle("menu-items-there");
});