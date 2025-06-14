// navigation.js

// Function to update page info and button states
function updateNavigation() {
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    // Update page info text
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    // Enable or disable Previous button
    prevButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;

    // Also update images when navigation changes
    updateImages();
    updateAlignmentImage(currentSet, currentPage);
    // updateImageProperties();
}

// Function to update mainImage and reportImage based on current page
function updateImages() {
    const mainImage = document.getElementById("mainImage");
    const reportImage = document.getElementById("reportImage");

    if (!currentSet || !currentSet.validationImages || currentSet.validationImages.length === 0) {
        console.warn("No images to update.");
        mainImage.src = null;
        reportImage.src = null;
        return;
    }

    

    const currentImages = currentSet.validationImages[currentPage - 1];

    if (currentImages) {
        mainImage.src = `${currentImages[0]}`;
        reportImage.src = `${currentImages[1]}`;
    } else {
        console.warn(`No images found for page ${currentPage}`);
    }
}

// Event listeners for buttons
document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updateNavigation();
    }
});

document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateNavigation();
    }
});
