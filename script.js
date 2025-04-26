const mainImage = document.getElementById('mainImage');
const circleImage = document.getElementById('circleImage');
const infoBox = document.getElementById('infoBox');

// Function to update zoomed view
function updateZoomedView(x, y) {
  // Dynamically get size from the circular image
  const circleWidth = circleImage.offsetWidth;  // Use offsetWidth for actual rendered size
  const circleHeight = circleImage.offsetHeight;  // Use offsetHeight for actual rendered size

  // 3x zoom, the zoomed region will be 100px by 100px
  const zoomFactor = 3;
  const sourceWidth = 100;  // Fixed 100px to crop around the mouse
  const sourceHeight = 100;

  // Round off values to avoid fractional pixels
  let roundedX = Math.round(x);
  let roundedY = Math.round(y);

  // Ensure the values do not go out of the bounds of the image
  const imageWidth = mainImage.width;
  const imageHeight = mainImage.height;

  // Clamp the coordinates to be within the image bounds
  roundedX = Math.max(sourceWidth / 2, Math.min(imageWidth - sourceWidth / 2, roundedX));
  roundedY = Math.max(sourceHeight / 2, Math.min(imageHeight - sourceHeight / 2, roundedY));

  // Calculate the source area to zoom into
  const sourceX = roundedX - sourceWidth / 2;
  const sourceY = roundedY - sourceHeight / 2;

  // Set the circular image's background size and position for zoom effect
  circleImage.style.backgroundImage = `url(${mainImage.src})`;
  circleImage.style.backgroundSize = `${imageWidth * zoomFactor}px ${imageHeight * zoomFactor}px`;
  circleImage.style.backgroundPosition = `-${sourceX * zoomFactor}px -${sourceY * zoomFactor}px`;
  circleImage.style.backgroundRepeat = 'no-repeat';
}

// Event to get image dimensions after it's fully loaded
mainImage.addEventListener('load', () => {
  const imgWidth = mainImage.naturalWidth;
  const imgHeight = mainImage.naturalHeight;

  // Call the update function with the center of the image initially
  updateZoomedView(imgWidth / 2, imgHeight / 2);
});

// Mouse move handler to track coordinates and update the zoomed view
mainImage.addEventListener('mousemove', (event) => {
  const rect = mainImage.getBoundingClientRect();
  
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);

  infoBox.value = `X: ${Math.max(0, x)}, Y: ${Math.max(0, y)}`;

  // Update zoomed view based on mouse position
  updateZoomedView(x, y);
});

// Reset info box when the mouse leaves the image area
mainImage.addEventListener('mouseleave', () => {
  infoBox.value = '';
});
