// JavaScript to toggle sidebar items
const sidebarItems = document.querySelectorAll('.sidebar-item');

// Function to handle sidebar item clicks
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all sidebar items
        sidebarItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to the clicked item
        item.classList.add('active');
    });
});
