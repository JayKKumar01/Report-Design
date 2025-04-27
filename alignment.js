// Flag to track if "Press and Hold" is selected
let isPressAndHoldSelected = true; // Assume true initially (or set based on default state)

// Get all buttons inside the action-mode-buttons container
const actionButtons = document.querySelectorAll('.action-mode-buttons button');

// Add click event listener to each button
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        actionButtons.forEach(btn => btn.classList.remove('selected'));

        // Add 'selected' class to the clicked button
        button.classList.add('selected');

        // Update flag based on the selected button
        if (button.id === 'pressHoldBtn') {
            isPressAndHoldSelected = true; // "Press and Hold" is selected
        } else if (button.id === 'highlightBtn') {
            isPressAndHoldSelected = false; // "Highlight" is selected
        }

        // Update the alignment image when the action mode changes
        updateAlignmentImage(currentSet, currentPage);
    });
});

// Function to get the alignment image for the current page based on the flag
function getAlignmentImage(currentSet, currentPage) {
    // Ensure we are not trying to access an out-of-bounds index
    const alignmentImages = currentSet.alignmentImages[currentPage - 1];

    // Check if the alignment image exists for the given page
    if (alignmentImages && alignmentImages.length > 2) {
        // Use the flag to return the correct alignment image
        return alignmentImages[isPressAndHoldSelected ? 0 : 2]; // Return 0th image if flag is true, else 1st
    } else {
        console.warn(`No alignment image found for page ${currentPage}`);
        return null;
    }
}

// Function to update the alignment image
function updateAlignmentImage(currentSet, currentPage) {
    const alignmentImageWrapper = document.querySelector('.alignment-image-wrapper');
    const alignmentImage = document.getElementById('alignmentImage');

    if (alignmentImageWrapper && alignmentImage) {
        const currentAlignmentImage = getAlignmentImage(currentSet, currentPage);

        if (currentAlignmentImage) {
            alignmentImage.src = currentAlignmentImage;
        } else {
            console.warn(`No alignment image found for page ${currentPage}`);
        }
    }
}

// Handle press-and-hold toggle for alignment image
const alignmentImage = document.getElementById('alignmentImage');

// Track whether the mouse is currently pressed
let isMousePressed = false;

// Add mousedown and mouseup events to handle press and hold
alignmentImage.addEventListener('mousedown', () => {
    if (isPressAndHoldSelected) {
        isMousePressed = true;
        // Change the image to the second one when the mouse is pressed down
        const alignmentImages = currentSet.alignmentImages[currentPage - 1];
        if (alignmentImages && alignmentImages.length > 1) {
            alignmentImage.src = alignmentImages[1]; // Show the second image
        }
    }
});

alignmentImage.addEventListener('mouseup', () => {
    if (isPressAndHoldSelected && isMousePressed) {
        isMousePressed = false;
        // Revert back to the first image when the mouse is released
        const alignmentImages = currentSet.alignmentImages[currentPage - 1];
        if (alignmentImages && alignmentImages.length > 1) {
            alignmentImage.src = alignmentImages[0]; // Show the first image
        }
    }
});

alignmentImage.addEventListener('mouseleave', () => {
    if (isMousePressed) {
        // Reset the image if the mouse leaves the alignmentImage while pressed
        isMousePressed = false;
        const alignmentImages = currentSet.alignmentImages[currentPage - 1];
        if (alignmentImages && alignmentImages.length > 1) {
            alignmentImage.src = alignmentImages[0]; // Revert to the first image
        }
    }
});
