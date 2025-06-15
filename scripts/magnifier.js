const mainImage = document.getElementById('mainImage');
const circleImage = document.getElementById('circleImage');
const reportImage = document.getElementById('reportImage');
const reportCircleImage = document.getElementById('reportCircleImage');

const zoomFactor = 2;
const circleSize = 200;
const sourceWidth = circleSize / zoomFactor;
const sourceHeight = circleSize / zoomFactor;

let imageWidth = 0, imageHeight = 0, imageSrc = "", rect = {};
let reportWidth = 0, reportHeight = 0, reportSrc = "";

let lastX = null, lastY = null, lastClientX = null, lastClientY = null;
let isMouseOverReport = false;
let rafPending = false;

function updateImageProperties() {
  imageWidth = mainImage.width;
  imageHeight = mainImage.height;
  imageSrc = mainImage.src;
  rect = mainImage.getBoundingClientRect();
}
mainImage.onload = updateImageProperties;
if (mainImage.complete) updateImageProperties();

function updateReportProperties() {
  reportWidth = reportImage.width;
  reportHeight = reportImage.height;
  reportSrc = reportImage.src;
}
reportImage.onload = updateReportProperties;
if (reportImage.complete) updateReportProperties();

function drawZoomCircle({
  target,
  imageSrc,
  imgW,
  imgH,
  x,
  y,
  screenX,
  screenY
}) {
  const boundedX = Math.max(sourceWidth / 2, Math.min(imgW - sourceWidth / 2, Math.round(x)));
  const boundedY = Math.max(sourceHeight / 2, Math.min(imgH - sourceHeight / 2, Math.round(y)));
  const sourceX = boundedX - sourceWidth / 2;
  const sourceY = boundedY - sourceHeight / 2;

  target.style.backgroundImage = `url(${imageSrc})`;
  target.style.backgroundSize = `${imgW * zoomFactor}px ${imgH * zoomFactor}px`;
  target.style.backgroundPosition = `-${sourceX * zoomFactor}px -${sourceY * zoomFactor}px`;
  target.style.backgroundRepeat = 'no-repeat';
  target.style.width = `${circleSize}px`;
  target.style.height = `${circleSize}px`;
  target.style.left = `${screenX - circleSize / 2}px`;
  target.style.top = `${screenY - circleSize / 2}px`;
  target.style.display = 'block';
}

// ---- Main Image ----
mainImage.addEventListener('mousemove', (event) => {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    drawZoomCircle({
      target: circleImage,
      imageSrc,
      imgW: imageWidth,
      imgH: imageHeight,
      x,
      y,
      screenX: Math.round(rect.left + x),
      screenY: Math.round(rect.top + y)
    });
    rafPending = false;
  });
});

mainImage.addEventListener('mouseleave', () => {
  circleImage.style.display = 'none';
});

// ---- Report Image ----
reportImage.addEventListener('mousemove', (event) => {
  const reportRect = reportImage.getBoundingClientRect();
  const x = event.clientX - reportRect.left;
  const y = event.clientY - reportRect.top;

  lastX = x;
  lastY = y;
  lastClientX = event.clientX;
  lastClientY = event.clientY;
  isMouseOverReport = true;

  if (!rafPending) {
    rafPending = true;
    requestAnimationFrame(() => {
      drawZoomCircle({
        target: reportCircleImage,
        imageSrc: reportSrc,
        imgW: reportWidth,
        imgH: reportHeight,
        x: lastX,
        y: lastY,
        screenX: lastClientX,
        screenY: lastClientY
      });
      rafPending = false;
    });
  }
});

reportImage.addEventListener('mouseleave', () => {
  isMouseOverReport = false;
  reportCircleImage.style.display = 'none';
});

// ---- Scroll Zoom Tracking ----
document.querySelector('.report-container').addEventListener('scroll', () => {
  if (isMouseOverReport && lastX !== null && lastY !== null) {
    const reportRect = reportImage.getBoundingClientRect();
    const x = lastClientX - reportRect.left;
    const y = lastClientY - reportRect.top;

    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(() => {
        drawZoomCircle({
          target: reportCircleImage,
          imageSrc: reportSrc,
          imgW: reportWidth,
          imgH: reportHeight,
          x,
          y,
          screenX: lastClientX,
          screenY: lastClientY
        });
        rafPending = false;
      });
    }
  }
});
