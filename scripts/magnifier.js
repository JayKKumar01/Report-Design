const mainImage = document.getElementById('mainImage');
const circleImage = document.getElementById('circleImage');
const reportImage = document.getElementById('reportImage');
const reportCircleImage = document.getElementById('reportCircleImage');

// Zoom config
const zoomFactor = 2;
const circleSize = 200;
const sourceWidth = circleSize / zoomFactor;
const sourceHeight = circleSize / zoomFactor;

// Main image variables
let imageWidth = 0;
let imageHeight = 0;
let imageSrc = "";
let rect = {};

// Report image variables
let reportWidth = 0;
let reportHeight = 0;
let reportSrc = "";
let reportRect = {};

// Load image properties
function updateImageProperties() {
  imageWidth = mainImage.width;
  imageHeight = mainImage.height;
  imageSrc = mainImage.src;
  rect = mainImage.getBoundingClientRect();
}
mainImage.onload = updateImageProperties;
if (mainImage.complete) updateImageProperties();

// Load report image properties
function updateReportProperties() {
  reportWidth = reportImage.width;
  reportHeight = reportImage.height;
  reportSrc = reportImage.src;
  reportRect = reportImage.getBoundingClientRect();
}
reportImage.onload = updateReportProperties;
if (reportImage.complete) updateReportProperties();

// Update zoom for main image
function updateZoomedView(x, y) {
  let roundedX = Math.round(x);
  let roundedY = Math.round(y);

  roundedX = Math.max(sourceWidth / 2, Math.min(imageWidth - sourceWidth / 2, roundedX));
  roundedY = Math.max(sourceHeight / 2, Math.min(imageHeight - sourceHeight / 2, roundedY));

  const sourceX = roundedX - sourceWidth / 2;
  const sourceY = roundedY - sourceHeight / 2;

  circleImage.style.backgroundImage = `url(${imageSrc})`;
  circleImage.style.backgroundSize = `${imageWidth * zoomFactor}px ${imageHeight * zoomFactor}px`;
  circleImage.style.backgroundPosition = `-${sourceX * zoomFactor}px -${sourceY * zoomFactor}px`;
  circleImage.style.backgroundRepeat = 'no-repeat';

  circleImage.style.width = `${circleSize}px`;
  circleImage.style.height = `${circleSize}px`;
  const circlePosX = Math.round(rect.left + (x - circleSize / 2));
  const circlePosY = Math.round(rect.top + (y - circleSize / 2));

  circleImage.style.left = `${circlePosX}px`;
  circleImage.style.top = `${circlePosY}px`;
  circleImage.style.display = 'block';
}

// Update zoom for report image
function updateReportZoom(x, y) {
  let roundedX = Math.round(x);
  let roundedY = Math.round(y);

  roundedX = Math.max(sourceWidth / 2, Math.min(reportWidth - sourceWidth / 2, roundedX));
  roundedY = Math.max(sourceHeight / 2, Math.min(reportHeight - sourceHeight / 2, roundedY));

  const sourceX = roundedX - sourceWidth / 2;
  const sourceY = roundedY - sourceHeight / 2;

  reportCircleImage.style.backgroundImage = `url(${reportSrc})`;
  reportCircleImage.style.backgroundSize = `${reportWidth * zoomFactor}px ${reportHeight * zoomFactor}px`;
  reportCircleImage.style.backgroundPosition = `-${sourceX * zoomFactor}px -${sourceY * zoomFactor}px`;
  reportCircleImage.style.backgroundRepeat = 'no-repeat';

  reportCircleImage.style.width = `${circleSize}px`;
  reportCircleImage.style.height = `${circleSize}px`;
  const circlePosX = Math.round(reportRect.left + (x - circleSize / 2));
  const circlePosY = Math.round(reportRect.top + (y - circleSize / 2));

  reportCircleImage.style.left = `${circlePosX}px`;
  reportCircleImage.style.top = `${circlePosY}px`;
  reportCircleImage.style.display = 'block';
}

// Events for main image
mainImage.addEventListener('mousemove', (event) => {
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  updateZoomedView(x, y);
});
mainImage.addEventListener('mouseleave', () => {
  circleImage.style.display = 'none';
});

// Events for report image
reportImage.addEventListener('mousemove', (event) => {
  const x = event.clientX - reportRect.left;
  const y = event.clientY - reportRect.top;
  updateReportZoom(x, y);
});
reportImage.addEventListener('mouseleave', () => {
  reportCircleImage.style.display = 'none';
});
