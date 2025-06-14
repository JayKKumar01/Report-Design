// Map to store the item image data
const itemImageMap = new Map([
    ["Long_Test_Case_01", {
        validationImages: [
            ["item_1/content/page_1/combined.png", "no_diff_image.png"],
            ["item_1/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_1/alignment/page_1/img1.png", "item_1/alignment/page_1/img2.png", "item_1/alignment/page_1/diff.png"],
            ["item_1/alignment/page_2/img1.png", "item_1/alignment/page_2/img2.png", "item_1/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_02", {
        validationImages: [
            ["item_2/content/page_1/combined.png", "no_diff_image.png"],
            ["item_2/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_2/alignment/page_1/img1.png", "item_2/alignment/page_1/img2.png", "item_2/alignment/page_1/diff.png"],
            ["item_2/alignment/page_2/img1.png", "item_2/alignment/page_2/img2.png", "item_2/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_03", {
        validationImages: [
            ["item_3/content/page_1/combined.png", "no_diff_image.png"],
            ["item_3/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_3/alignment/page_1/img1.png", "item_3/alignment/page_1/img2.png", "item_3/alignment/page_1/diff.png"],
            ["item_3/alignment/page_2/img1.png", "item_3/alignment/page_2/img2.png", "item_3/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_04", {
        validationImages: [
            ["item_4/content/page_1/combined.png", "no_diff_image.png"],
            ["item_4/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_4/alignment/page_1/img1.png", "item_4/alignment/page_1/img2.png", "item_4/alignment/page_1/diff.png"],
            ["item_4/alignment/page_2/img1.png", "item_4/alignment/page_2/img2.png", "item_4/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_05", {
        validationImages: [
            ["item_5/content/page_1/combined.png", "no_diff_image.png"],
            ["item_5/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_5/alignment/page_1/img1.png", "item_5/alignment/page_1/img2.png", "item_5/alignment/page_1/diff.png"],
            ["item_5/alignment/page_2/img1.png", "item_5/alignment/page_2/img2.png", "item_5/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_06", {
        validationImages: [
            ["item_6/content/page_1/combined.png", "no_diff_image.png"],
            ["item_6/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_6/alignment/page_1/img1.png", "item_6/alignment/page_1/img2.png", "item_6/alignment/page_1/diff.png"],
            ["item_6/alignment/page_2/img1.png", "item_6/alignment/page_2/img2.png", "item_6/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_07", {
        validationImages: [
            ["item_7/content/page_1/combined.png", "no_diff_image.png"],
            ["item_7/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_7/alignment/page_1/img1.png", "item_7/alignment/page_1/img2.png", "item_7/alignment/page_1/diff.png"],
            ["item_7/alignment/page_2/img1.png", "item_7/alignment/page_2/img2.png", "item_7/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_08", {
        validationImages: [
            ["item_8/content/page_1/combined.png", "no_diff_image.png"],
            ["item_8/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_8/alignment/page_1/img1.png", "item_8/alignment/page_1/img2.png", "item_8/alignment/page_1/diff.png"],
            ["item_8/alignment/page_2/img1.png", "item_8/alignment/page_2/img2.png", "item_8/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_09", {
        validationImages: [
            ["item_9/content/page_1/combined.png", "no_diff_image.png"],
            ["item_9/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_9/alignment/page_1/img1.png", "item_9/alignment/page_1/img2.png", "item_9/alignment/page_1/diff.png"],
            ["item_9/alignment/page_2/img1.png", "item_9/alignment/page_2/img2.png", "item_9/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_10", {
        validationImages: [
            ["item_10/content/page_1/combined.png", "no_diff_image.png"],
            ["item_10/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_10/alignment/page_1/img1.png", "item_10/alignment/page_1/img2.png", "item_10/alignment/page_1/diff.png"],
            ["item_10/alignment/page_2/img1.png", "item_10/alignment/page_2/img2.png", "item_10/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_11", {
        validationImages: [
            ["item_11/content/page_1/combined.png", "no_diff_image.png"],
            ["item_11/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_11/alignment/page_1/img1.png", "item_11/alignment/page_1/img2.png", "item_11/alignment/page_1/diff.png"],
            ["item_11/alignment/page_2/img1.png", "item_11/alignment/page_2/img2.png", "item_11/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_12", {
        validationImages: [
            ["item_12/content/page_1/combined.png", "no_diff_image.png"],
            ["item_12/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_12/alignment/page_1/img1.png", "item_12/alignment/page_1/img2.png", "item_12/alignment/page_1/diff.png"],
            ["item_12/alignment/page_2/img1.png", "item_12/alignment/page_2/img2.png", "item_12/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_13", {
        validationImages: [
            ["item_13/content/page_1/combined.png", "no_diff_image.png"],
            ["item_13/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_13/alignment/page_1/img1.png", "item_13/alignment/page_1/img2.png", "item_13/alignment/page_1/diff.png"],
            ["item_13/alignment/page_2/img1.png", "item_13/alignment/page_2/img2.png", "item_13/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_14", {
        validationImages: [
            ["item_14/content/page_1/combined.png", "no_diff_image.png"],
            ["item_14/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_14/alignment/page_1/img1.png", "item_14/alignment/page_1/img2.png", "item_14/alignment/page_1/diff.png"],
            ["item_14/alignment/page_2/img1.png", "item_14/alignment/page_2/img2.png", "item_14/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_15", {
        validationImages: [
            ["item_15/content/page_1/combined.png", "no_diff_image.png"],
            ["item_15/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_15/alignment/page_1/img1.png", "item_15/alignment/page_1/img2.png", "item_15/alignment/page_1/diff.png"],
            ["item_15/alignment/page_2/img1.png", "item_15/alignment/page_2/img2.png", "item_15/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_16", {
        validationImages: [
            ["item_16/content/page_1/combined.png", "no_diff_image.png"],
            ["item_16/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_16/alignment/page_1/img1.png", "item_16/alignment/page_1/img2.png", "item_16/alignment/page_1/diff.png"],
            ["item_16/alignment/page_2/img1.png", "item_16/alignment/page_2/img2.png", "item_16/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_17", {
        validationImages: [
            ["item_17/content/page_1/combined.png", "no_diff_image.png"],
            ["item_17/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_17/alignment/page_1/img1.png", "item_17/alignment/page_1/img2.png", "item_17/alignment/page_1/diff.png"],
            ["item_17/alignment/page_2/img1.png", "item_17/alignment/page_2/img2.png", "item_17/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_18", {
        validationImages: [
            ["item_18/content/page_1/combined.png", "no_diff_image.png"],
            ["item_18/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_18/alignment/page_1/img1.png", "item_18/alignment/page_1/img2.png", "item_18/alignment/page_1/diff.png"],
            ["item_18/alignment/page_2/img1.png", "item_18/alignment/page_2/img2.png", "item_18/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_19", {
        validationImages: [
            ["item_19/content/page_1/combined.png", "no_diff_image.png"],
            ["item_19/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_19/alignment/page_1/img1.png", "item_19/alignment/page_1/img2.png", "item_19/alignment/page_1/diff.png"],
            ["item_19/alignment/page_2/img1.png", "item_19/alignment/page_2/img2.png", "item_19/alignment/page_2/diff.png"],
        ]
    }],
    ["Long_Test_Case_20", {
        validationImages: [
            ["item_20/content/page_1/combined.png", "no_diff_image.png"],
            ["item_20/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_20/alignment/page_1/img1.png", "item_20/alignment/page_1/img2.png", "item_20/alignment/page_1/diff.png"],
            ["item_20/alignment/page_2/img1.png", "item_20/alignment/page_2/img2.png", "item_20/alignment/page_2/diff.png"],
        ]
    }],
]);

// Example: Log the map to check the result
console.log(itemImageMap);
