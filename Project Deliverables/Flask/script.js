// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Wait for the document to be fully loaded before running JavaScript

    // Find the button element by its ID
    var button = document.getElementById("changeTextButton");

    // Find the element whose text you want to change by its ID
    var targetElement = document.getElementById("targetElement");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Change the text of the target element
        targetElement.innerHTML = "Text changed by JavaScript!";
    });
});
