/*Wait for the HTML to load before running JavaScript*/
document.addEventListener("DOMContentLoaded", function() {

    /*Select the theme toggle button from the page*/
    const themeButton = document.querySelector("#themebtn");

    /*Listen for when the user clicks the button*/
    themeButton.addEventListener("click", function() {
        /*Add or remove the 'dark-mode' class on body*/
        document.body.classList.toggle("dark-mode");

    /*Update the button text so users know what mode they are switching to*/
        if (themeButton.textContent === "Switch to Dark Mode") {
            themeButton.textContent = "Switch to Light Mode";
        } else {
            themeButton.textContent = "Switch to Dark Mode";
        }
    });
});

