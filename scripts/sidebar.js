// main.js (or wherever you are putting this)

// Assuming itemImageMap is already available in the scope

let currentSet = {};
let currentPageIndex = 0; // numeric map key of the current set
let totalPages = 0;
let currentPage = 1;  // Reset currentPage to 1

// Function to create sidebar items dynamically
function createSidebarItems() {
    const sidebarItemsContainer = document.getElementById('sidebar-items');
    if (!sidebarItemsContainer) return;

    sidebarItemsContainer.innerHTML = ''; // clear any existing items

    // Iterate through the map and create items
    itemImageMap.forEach((value, key) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('sidebar-item');
        // Use numeric key in id (stringified). Use name from the value.
        const safeKeyStr = String(key).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
        itemElement.id = `item-${safeKeyStr}`;
        // Display name from the value object; show key index to disambiguate if needed
        const displayName = value && value.name ? value.name : String(key);
        itemElement.textContent = `${displayName}`;

        // store the numeric key on the element so we can retrieve it reliably
        itemElement.dataset.key = String(key);

        // Add event listener for item selection
        itemElement.addEventListener('click', () => {
            // pass numeric key (convert from dataset to Number)
            selectItem(Number(itemElement.dataset.key), itemElement);
        });

        sidebarItemsContainer.appendChild(itemElement);
    });

    // Set the first item as active by default (use data-key)
    const firstItem = sidebarItemsContainer.querySelector('.sidebar-item');
    if (firstItem) {
        const firstKey = Number(firstItem.dataset.key || 0);
        selectItem(firstKey, firstItem);
    }
}

// Function to handle item selection
function selectItem(key, itemElement) {
    // Remove active class from all sidebar items
    document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));

    // Add active class to the clicked item (if provided)
    if (itemElement) itemElement.classList.add('active');
    else {
        const el = document.querySelector(`.sidebar-item[data-key="${String(key)}"]`);
        if (el) el.classList.add('active');
    }

    // Reset currentPage to 1
    currentPage = 1;

    // Store numeric index of current set
    currentPageIndex = key;

    // Get the current set from the clicked item's numeric key
    currentSet = itemImageMap.get(key);

    if (!currentSet) {
        console.warn(`No item found in itemImageMap for key: ${key}`);
        totalPages = 0;
        updateNavigation();
        return;
    }

    // Calculate totalPages based on validationImages length (safe check)
    totalPages = Array.isArray(currentSet.validationImages) ? currentSet.validationImages.length : 0;

    // Update navigation buttons and page info
    updateNavigation();

    // (Optional) Display alert with current set details
    const displayName = currentSet.name || String(key);
    console.log(`Item: ${displayName} (key=${key}), Total Pages: ${totalPages}, Current Page: ${currentPage}`);
}

// Call the function to populate the sidebar after the DOM has loaded
document.addEventListener('DOMContentLoaded', function(){
    createSidebarItems();
});
