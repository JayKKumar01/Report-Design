// action-toggle.js

// Get all buttons inside the action-mode-buttons container
const actionButtons = document.querySelectorAll('.action-mode-buttons button');

// Add click event listener to each button
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        actionButtons.forEach(btn => btn.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        button.classList.add('selected');
    });
});
