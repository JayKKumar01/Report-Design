// Updated Map to store the item image data (with "items/" prefix)
const itemImageMap = new Map([
    ["Item A", {
        validationImages: [
            ["items/1.jpg", "items/2.jpg"],
            ["items/3.jpg", "items/4.jpg"],
            ["items/5.jpg", "items/6.jpg"],
            ["items/2.jpg", "items/3.jpg"],
            ["items/4.jpg", "items/5.jpg"],
        ],
        alignmentImages: [
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
        ]
    }],
    ["Item B", {
        validationImages: [
            ["items/1.jpg", "items/3.jpg"],
            ["items/2.jpg", "items/4.jpg"],
            ["items/5.jpg", "items/1.jpg"],
            ["items/3.jpg", "items/5.jpg"],
            ["items/4.jpg", "items/2.jpg"],
        ],
        alignmentImages: [
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
        ]
    }],
    ["Item C", {
        validationImages: [
            ["items/2.jpg", "items/3.jpg"],
            ["items/4.jpg", "items/5.jpg"],
            ["items/6.jpg", "items/1.jpg"],
            ["items/3.jpg", "items/4.jpg"],
            ["items/5.jpg", "items/6.jpg"],
        ],
        alignmentImages: [
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
        ]
    }],
    ["Item D", {
        validationImages: [
            ["items/1.jpg", "items/5.jpg"],
            ["items/2.jpg", "items/6.jpg"],
            ["items/3.jpg", "items/1.jpg"],
            ["items/4.jpg", "items/3.jpg"],
            ["items/5.jpg", "items/2.jpg"],
        ],
        alignmentImages: [
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
        ]
    }],
    ["Item E", {
        validationImages: [
            ["items/1.jpg", "items/3.jpg"],
            ["items/4.jpg", "items/2.jpg"],
            ["items/5.jpg", "items/6.jpg"],
            ["items/3.jpg", "items/5.jpg"],
            ["items/2.jpg", "items/4.jpg"],
        ],
        alignmentImages: [
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
            ["items/align1.jpg", "items/align2.jpg", "items/align2.jpg"],
        ]
    }]
]);

// Example: Log the map to check the result
console.log(itemImageMap);
