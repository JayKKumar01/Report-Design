// main.js (or wherever you are putting this)

// Assuming itemImageMap is already available in the scope

let currentSet = {};
let currentPageIndex = 0;
let totalPages = 0;
let currentPage = 1;  // Reset currentPage to 1

// Function to create sidebar items dynamically
function createSidebarItems() {
    const sidebarItemsContainer = document.getElementById('sidebar-items');

    // Iterate through the map and create items
    itemImageMap.forEach((value, key) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('sidebar-item');
        itemElement.id = `item-${key.toLowerCase().replace(' ', '-')}`;
        itemElement.textContent = key;

        // Add event listener for item selection
        itemElement.addEventListener('click', () => {
            selectItem(key, itemElement);
        });

        sidebarItemsContainer.appendChild(itemElement);
    });

    // Set the first item as active by default
    const firstItem = sidebarItemsContainer.querySelector('.sidebar-item');
    if (firstItem) {
        const firstKey = firstItem.textContent;
        selectItem(firstKey, firstItem);
    }
}

// Function to handle item selection
function selectItem(key, itemElement) {
    // Remove active class from all sidebar items
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));

    // Add active class to the clicked item
    itemElement.classList.add('active');

    // Reset currentPage to 1
    currentPage = 1;

    // Get the current set from the clicked item
    currentSet = itemImageMap.get(key);

    // Calculate totalPages based on validationImages length
    totalPages = currentSet.validationImages.length;

    // Update navigation buttons and page info
    updateNavigation();

    // (Optional) Display alert with current set details
    console.log(`Item: ${key}, Total Pages: ${totalPages}, Current Page: ${currentPage}`);
}

// Call the function to populate the sidebar after the DOM has loaded
document.addEventListener('DOMContentLoaded', function(){
    createSidebarItems();
});
