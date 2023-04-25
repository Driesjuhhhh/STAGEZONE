// Add a click event listener to the dropdown button
var dropdownButton = document.querySelector(".dropbtn");
dropdownButton.addEventListener("click", function() {
    // Toggle the "show" class on the dropdown content
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
    } else {
        dropdownContent.classList.add("show");
    }
});

// Close the dropdown menu if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
});