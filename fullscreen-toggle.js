document.getElementById("fullscreenBtn").addEventListener("click", function() {
    var wrapper = document.querySelector(".alignment-image-wrapper");
    var icon = document.getElementById("fullscreenBtn");
    
    // Toggle fullscreen class on wrapper
    wrapper.classList.toggle("fullscreen");
    
    // Toggle icon to indicate fullscreen state
    if (wrapper.classList.contains("fullscreen")) {
        icon.textContent = "⛔"; // Change to "Exit Fullscreen" icon (or any icon of your choice)
    } else {
        icon.textContent = "⛶"; // Original fullscreen icon
    }
});
