document.addEventListener('DOMContentLoaded', function() {
    
});

const button = document.getElementById("random-button");
const postsArray = document.getElementsByClassName("profile-posts");
let counter = 0;

button.addEventListener("click", function() {
    counter += 1;
    for (values in postsArray) {
        if (counter % 2 !== 0) {
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

const menu = document.getElementById("main-menu-id");

document.addEventListener('click', function(event) {
    var isClickInside = menu.contains(event.target);
    if (!isClickInside) {
        let element = document.getElementById("menu-list");
        element.classList.remove("menu-items-there");
    }
});

function likePost(postId) {
    fetch(
        `/posts/${postId}/like`,
        {
            method: "POST"
        }
    );
}

function dislikePost(postId) {
    fetch(
        `/posts/${postId}/dislike`,
        {
            method: "POST"
        }
    );
}

function deletePost(postId) {
    fetch(
        `/posts/${postId}/delete`,
        {
            method: "POST"
        }
    );
}

document.addEventListener("keydown", function(event) {
    if ('Escape' === event.key) {
        let element = document.getElementById("menu-list");
        element.classList.remove("menu-items-there");
    }
});

