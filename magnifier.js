const mainImage = document.getElementById('mainImage');
const circleImage = document.getElementById('circleImage');

// Zoom factor: Controls the level of zoom
const zoomFactor = 5;
const circleSize = 200;  // Size of the zoomed area (200px is the size of the circle)
const sourceWidth = circleSize / zoomFactor; 
const sourceHeight = circleSize / zoomFactor;

// Cache image dimensions to avoid recalculating during each mouse move
const imageWidth = mainImage.width;
const imageHeight = mainImage.height;

// Set background image for the circle once
const imageSrc = mainImage.src;

const rect = mainImage.getBoundingClientRect();

// Function to update zoomed view and position circular image
function updateZoomedView(x, y) {
  // Round off values to avoid fractional pixels
  let roundedX = Math.round(x);
  let roundedY = Math.round(y);

  // Clamp the coordinates to ensure they stay within image bounds
  roundedX = Math.max(sourceWidth / 2, Math.min(imageWidth - sourceWidth / 2, roundedX));
  roundedY = Math.max(sourceHeight / 2, Math.min(imageHeight - sourceHeight / 2, roundedY));

  // Calculate the source area to zoom into, so the center of the circle is at (x, y)
  const sourceX = roundedX - sourceWidth / 2;
  const sourceY = roundedY - sourceHeight / 2;

  // Set the circular image's background properties for zoom effect
  circleImage.style.backgroundImage = `url(${imageSrc})`;
  circleImage.style.backgroundSize = `${imageWidth * zoomFactor}px ${imageHeight * zoomFactor}px`;
  circleImage.style.backgroundPosition = `-${sourceX * zoomFactor}px -${sourceY * zoomFactor}px`;
  circleImage.style.backgroundRepeat = 'no-repeat';

  // Set the circular image size and position based on mouse coordinates
  circleImage.style.width = `${circleSize}px`;
  circleImage.style.height = `${circleSize}px`;
  const circlePosX = Math.round(rect.left + (x - circleSize / 2));
  const circlePosY = Math.round(rect.top + (y - circleSize / 2));

  // Update the position of the circular image
  circleImage.style.left = `${circlePosX}px`;
  circleImage.style.top = `${circlePosY}px`;

  // Show the circular image when updating zoomed view
  circleImage.style.display = 'block';
}

// Mouse move handler to track coordinates and update the zoomed view
mainImage.addEventListener('mousemove', (event) => {
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  updateZoomedView(x, y);
});

// Hide the circular image when mouse leaves the main image
mainImage.addEventListener('mouseleave', () => {
  circleImage.style.display = 'none';
});

