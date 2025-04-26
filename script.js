const mainImage = document.getElementById('mainImage');
const circleImage = document.getElementById('circleImage');

// Zoom factor: Controls the level of zoom
const zoomFactor = 3;
const circleSize = 200;  // Size of the zoomed area (100px)
// Dynamically calculate the source area of the main image to zoom into
const sourceWidth = circleSize / zoomFactor; 
const sourceHeight = circleSize / zoomFactor;

// Function to update zoomed view and position circular image
function updateZoomedView(x, y) {

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

  // Set the circular image size and position based on mouse coordinates
  circleImage.style.width = `${circleSize}px`;
  circleImage.style.height = `${circleSize}px`;
  const circlePosX = Math.round(x - circleSize / 2);
  const circlePosY = Math.round(y - circleSize / 2);

  // Update the position of the circular image
  circleImage.style.left = `${circlePosX}px`;
  circleImage.style.top = `${circlePosY}px`;

  // Show the circular image when updating zoomed view
  circleImage.style.display = 'block';
}

// Mouse move handler to track coordinates and update the zoomed view
mainImage.addEventListener('mousemove', (event) => {
  const rect = mainImage.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Update zoomed view based on mouse position
  updateZoomedView(x, y);
});

// Hide the circular image when mouse leaves the main image
mainImage.addEventListener('mouseleave', () => {
  circleImage.style.display = 'none';
});
