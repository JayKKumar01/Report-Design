Report Design - Interactive Image Comparison Tool

This project is a web-based tool that allows users to compare two images side-by-side using a circular magnifier (zoom lens). It’s particularly useful for design verification, PDF-to-image comparisons, or spotting subtle differences between reference and report images.

🔗 Live Demo  
https://jaykkumar01.github.io/Report-Design/

Features
--------

- Zoom lens that follows the mouse to magnify image content.
- Works for both fixed main image and vertically scrollable report image.
- Automatically updates magnifier content even while scrolling.
- Performance-optimized for low-end devices.
- No external dependencies — pure HTML, CSS, and JavaScript.

How It Works
------------

- The left side displays the fixed main image.
- The right side shows a tall report image inside a scrollable container.
- As you move the mouse over either image, a circular lens shows a zoomed-in portion of the area.
- On scroll, the zoomed content updates dynamically, staying in sync with the image beneath the lens.

Usage
-----

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Replace `mainImage` and `reportImage` `src` attributes in `index.html` with your desired images if needed.

Customization
-------------

- Adjust `zoomFactor` or `circleSize` in `script.js` to change zoom intensity or lens size.
- Modify lens styling in `style.css` to customize borders, shape, shadow, etc.
- Easily extendable for use with other image formats or multi-page documents.

File Structure
--------------

- index.html       – Main layout and image containers.
- style.css        – Layout styling and magnifier appearance.
- script.js        – All zoom and scroll synchronization logic.

License
-------

MIT License — Free for personal and commercial use.

Author
------

Developed by Jay Kumar  
GitHub: https://github.com/JayKKumar01  
Live Demo: https://jaykkumar01.github.io/Report-Design/
