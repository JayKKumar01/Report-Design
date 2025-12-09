// Map to store the item image data
const itemImageMap = new Map([

    // ---------------- ITEM 1 ----------------
    [1, {
        name: "Long_Test_Case_01",

        validationImages: [
            ["item_1/content/page_1/combined.png", "no_diff_image.png"],
            ["item_1/content/page_2/combined.png", "no_diff_image.png"],
        ],

        alignmentImages: [
            ["item_1/alignment/page_1/img1.png", "item_1/alignment/page_1/img2.png", "item_1/alignment/page_1/diff.png"],
            ["item_1/alignment/page_2/img1.png", "item_1/alignment/page_2/img2.png", "item_1/alignment/page_2/diff.png"],
        ],

        prodigyValidation: [
            {
                source: {
                    image: "item_1/alignment/page_1/img1.png",
                    pairs: [
                        ["He go to market yesterday.", "He went to the market yesterday."],
                        ["She don't likes apples.", "She doesn't like apples."]
                    ]
                },
                target: {
                    image: "item_1/alignment/page_2/img2.png",
                    pairs: [
                        ["He go to market yesterday.", "He went to the market yesterday."],
                        ["She don't likes apples.", "She doesn't like apples."]
                    ]
                }
            },
            {
                source: {
                    image: "item_1/alignment/page_2/img1.png",
                    pairs: [
                        ["This are best days of my life.", "These are the best days of my life."],
                        ["The dog chase the cat.", "The dog chased the cat."]
                    ]
                },
                target: {
                    image: "item_1/alignment/page_2/img2.png",
                    pairs: [
                        ["This are best days of my life.", "These are the best days of my life."],
                        ["The dog chase the cat.", "The dog chased the cat."]
                    ]
                }
            }
        ]
    }],


    // ---------------- ITEM 2 ----------------
    [2, {
        name: "Long_Test_Case_02",

        validationImages: [
            ["item_2/content/page_1/combined.png", "no_diff_image.png"],
            ["item_2/content/page_2/combined.png", "no_diff_image.png"],
        ],

        alignmentImages: [
            ["item_2/alignment/page_1/img1.png", "item_2/alignment/page_1/img2.png", "item_2/alignment/page_1/diff.png"],
            ["item_2/alignment/page_2/img1.png", "item_2/alignment/page_2/img2.png", "item_2/alignment/page_2/diff.png"],
        ],

        prodigyValidation: [
            {
                source: {
                    image: "item_2/alignment/page_1/img1.png",
                    pairs: [
                        ["He don't knew the answer.", "He didn't know the answer."],
                        ["They was playing outside.", "They were playing outside."]
                    ]
                },
                target: {
                    image: "item_2/alignment/page_1/img2.png",
                    pairs: [
                        ["He don't knew the answer.", "He didn't know the answer."],
                        ["They was playing outside.", "They were playing outside."]
                    ]
                }
            },
            {
                source: {
                    image: "item_2/alignment/page_2/img1.png",
                    pairs: [
                        ["I enjoys to read books.", "I enjoy reading books."],
                        ["The team have won the match.", "The team has won the match."]
                    ]
                },
                target: {
                    image: "item_2/alignment/page_2/img2.png",
                    pairs: [
                        ["I enjoys to read books.", "I enjoy reading books."],
                        ["The team have won the match.", "The team has won the match."]
                    ]
                }
            }
        ]
    }],


    // ---------------- ITEM 3 ----------------
    [3, {
        name: "Long_Test_Case_03",

        validationImages: [
            ["item_3/content/page_1/combined.png", "no_diff_image.png"],
            ["item_3/content/page_2/combined.png", "no_diff_image.png"],
        ],

        alignmentImages: [
            ["item_3/alignment/page_1/img1.png", "item_3/alignment/page_1/img2.png", "item_3/alignment/page_1/diff.png"],
            ["item_3/alignment/page_2/img1.png", "item_3/alignment/page_2/img2.png", "item_3/alignment/page_2/diff.png"],
        ],

        prodigyValidation: [
            {
                source: {
                    image: "item_3/alignment/page_1/img1.png",
                    pairs: [
                        ["She were very tired after work.", "She was very tired after work."],
                        ["We was going to the park.", "We were going to the park."]
                    ]
                },
                target: {
                    image: "item_3/alignment/page_1/img2.png",
                    pairs: [
                        ["She were very tired after work.", "She was very tired after work."],
                        ["We was going to the park.", "We were going to the park."]
                    ]
                }
            },
            {
                source: {
                    image: "item_3/alignment/page_2/img1.png",
                    pairs: [
                        ["He don't has a car.", "He doesn't have a car."],
                        ["The children is making noise.", "The children are making noise."]
                    ]
                },
                target: {
                    image: "item_3/alignment/page_2/img2.png",
                    pairs: [
                        ["He don't has a car.", "He doesn't have a car."],
                        ["The children is making noise.", "The children are making noise."]
                    ]
                }
            }
        ]
    }],


    // ---------------- ITEM 4 ----------------
    [4, {
        name: "Long_Test_Case_04",

        validationImages: [
            ["item_4/content/page_1/combined.png", "no_diff_image.png"],
            ["item_4/content/page_2/combined.png", "no_diff_image.png"],
        ],

        alignmentImages: [
            ["item_4/alignment/page_1/img1.png", "item_4/alignment/page_1/img2.png", "item_4/alignment/page_1/diff.png"],
            ["item_4/alignment/page_2/img1.png", "item_4/alignment/page_2/img2.png", "item_4/alignment/page_2/diff.png"],
        ],

        prodigyValidation: [
            {
                source: {
                    image: "item_4/alignment/page_1/img1.png",
                    pairs: [
                        ["He don't want to go school.", "He doesn't want to go to school."],
                        ["My friend live far from here.", "My friend lives far from here."]
                    ]
                },
                target: {
                    image: "item_4/alignment/page_1/img2.png",
                    pairs: [
                        ["He don't want to go school.", "He doesn't want to go to school."],
                        ["My friend live far from here.", "My friend lives far from here."]
                    ]
                }
            },
            {
                source: {
                    image: "item_4/alignment/page_2/img1.png",
                    pairs: [
                        ["The movie were very boring.", "The movie was very boring."],
                        ["She have finished her homework.", "She has finished her homework."]
                    ]
                },
                target: {
                    image: "item_4/alignment/page_2/img2.png",
                    pairs: [
                        ["The movie were very boring.", "The movie was very boring."],
                        ["She have finished her homework.", "She has finished her homework."]
                    ]
                }
            }
        ]
    }],


    // ---------------- ITEM 5 ----------------
    [5, {
        name: "Long_Test_Case_05",

        validationImages: [
            ["item_5/content/page_1/combined.png", "no_diff_image.png"],
            ["item_5/content/page_2/combined.png", "no_diff_image.png"],
        ],

        alignmentImages: [
            ["item_5/alignment/page_1/img1.png", "item_5/alignment/page_1/img2.png", "item_5/alignment/page_1/diff.png"],
            ["item_5/alignment/page_2/img1.png", "item_5/alignment/page_2/img2.png", "item_5/alignment/page_2/diff.png"],
        ],

        prodigyValidation: [
            {
                source: {
                    image: "item_5/alignment/page_1/img1.png",
                    pairs: [
                        ["He didn't went to the office.", "He didn't go to the office."],
                        ["They was late for the meeting.", "They were late for the meeting."]
                    ]
                },
                target: {
                    image: "item_5/alignment/page_1/img2.png",
                    pairs: [
                        ["He didn't went to the office.", "He didn't go to the office."],
                        ["They was late for the meeting.", "They were late for the meeting."]
                    ]
                }
            },
            {
                source: {
                    image: "item_5/alignment/page_2/img1.png",
                    pairs: [
                        ["I doesn't like this food.", "I don't like this food."],
                        ["The teacher give us homework yesterday.", "The teacher gave us homework yesterday."]
                    ]
                },
                target: {
                    image: "item_5/alignment/page_2/img2.png",
                    pairs: [
                        ["I doesn't like this food.", "I don't like this food."],
                        ["The teacher give us homework yesterday.", "The teacher gave us homework yesterday."]
                    ]
                }
            }
        ]
    }],

]);

console.log(itemImageMap);
