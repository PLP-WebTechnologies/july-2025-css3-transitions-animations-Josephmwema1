/* -------------------------------
   Part 2: JavaScript Functions
----------------------------------*/

// Global variable
let globalNum = 10;
document.getElementById('globalVar').textContent = globalNum;

// Function with parameters and return value
function sum(a, b) {
    let localSum = a + b; // Local scope variable
    return localSum;       // Return value to caller
}

// Using the function
let result = sum(5, 7);
document.getElementById('sumResult').textContent = result;

/* -------------------------------
   Part 3: JS triggers CSS Animations
----------------------------------*/

const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBoxBtn');

// Function to toggle spin animation
function toggleSpin(element) {
    element.classList.toggle('spin');
}

// Function to move and change box color dynamically
function animateBox(element) {
    toggleSpin(element); // Start/Stop spinning

    // Move box horizontally using transform
    element.style.transform = "translateX(150px)";
    // Change background color dynamically
    element.style.backgroundColor = "#8e44ad";

    // Return final styles (demonstrates return)
    return {
        transform: element.style.transform,
        color: element.style.backgroundColor
    };
}

// Button event listener triggers animation
animateBtn.addEventListener('click', () => {
    let finalStyles = animateBox(box);
    console.log("Box final styles:", finalStyles);
});
