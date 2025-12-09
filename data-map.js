// Map to store the item image data
const itemImageMap = new Map([
    [1, {
        name: "Long_Test_Case_01",
        validationImages: [
            ["item_1/content/page_1/combined.png", "no_diff_image.png"],
            ["item_1/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_1/alignment/page_1/img1.png", "item_1/alignment/page_1/img2.png", "item_1/alignment/page_1/diff.png"],
            ["item_1/alignment/page_2/img1.png", "item_1/alignment/page_2/img2.png", "item_1/alignment/page_2/diff.png"],
        ]
    }],
    [2, {
        name: "Long_Test_Case_01",
        validationImages: [
            ["item_2/content/page_1/combined.png", "no_diff_image.png"],
            ["item_2/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_2/alignment/page_1/img1.png", "item_2/alignment/page_1/img2.png", "item_2/alignment/page_1/diff.png"],
            ["item_2/alignment/page_2/img1.png", "item_2/alignment/page_2/img2.png", "item_2/alignment/page_2/diff.png"],
        ]
    }],
    [3, {
        name: "Long_Test_Case_03",
        validationImages: [
            ["item_3/content/page_1/combined.png", "no_diff_image.png"],
            ["item_3/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_3/alignment/page_1/img1.png", "item_3/alignment/page_1/img2.png", "item_3/alignment/page_1/diff.png"],
            ["item_3/alignment/page_2/img1.png", "item_3/alignment/page_2/img2.png", "item_3/alignment/page_2/diff.png"],
        ]
    }],
    [4, {
        name: "Long_Test_Case_04",
        validationImages: [
            ["item_4/content/page_1/combined.png", "no_diff_image.png"],
            ["item_4/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_4/alignment/page_1/img1.png", "item_4/alignment/page_1/img2.png", "item_4/alignment/page_1/diff.png"],
            ["item_4/alignment/page_2/img1.png", "item_4/alignment/page_2/img2.png", "item_4/alignment/page_2/diff.png"],
        ]
    }],
    [5, {
        name: "Long_Test_Case_05",
        validationImages: [
            ["item_5/content/page_1/combined.png", "no_diff_image.png"],
            ["item_5/content/page_2/combined.png", "no_diff_image.png"],
        ],
        alignmentImages: [
            ["item_5/alignment/page_1/img1.png", "item_5/alignment/page_1/img2.png", "item_5/alignment/page_1/diff.png"],
            ["item_5/alignment/page_2/img1.png", "item_5/alignment/page_2/img2.png", "item_5/alignment/page_2/diff.png"],
        ]
    }],
]);

console.log(itemImageMap);
