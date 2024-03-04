// Function to create typing animation
function typeWriter(text, i, element) {
    if (i < text.length) {
        document.getElementById(element).innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(text, i, element);
        }, 100); // Change typing speed here (milliseconds)
    }
}

// Call the typing animation function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    var text = "Hello my name is Dylan Hendrix"; // Change name here
    typeWriter(text, 0, 'typing-text');
});

document.addEventListener('DOMContentLoaded', function() {
    var content = document.getElementById('content');
    var button = document.getElementById('explore-button');

    setTimeout(function() {
        content.style.opacity = 1;
        button.style.display = 'block';
    }, 1000); // Adjust the delay as needed (in milliseconds)
});


let recent1 = document.getElementById("recent1")
let recent2 = document.getElementById("recent2")

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    recent1.style.marginLeft = value * 2.5 + "px";
    recent2.style.marginLeft = value * 2.5 + "px";
});

