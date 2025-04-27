// JavaScript to toggle content and alignment validation
const contentValidationBtn = document.getElementById('content-validation-btn');
const alignmentValidationBtn = document.getElementById('alignment-validation-btn');
const contentDiv = document.getElementById('content-div');
const alignmentDiv = document.getElementById('alignment-div');

// Function to show Content Validation
contentValidationBtn.addEventListener('click', () => {
    contentDiv.style.display = 'flex';
    alignmentDiv.style.display = 'none';
    contentValidationBtn.classList.add('selected');
    alignmentValidationBtn.classList.remove('selected');
    updateImageProperties();
});

// Function to show Alignment Validation
alignmentValidationBtn.addEventListener('click', () => {
    contentDiv.style.display = 'none';
    alignmentDiv.style.display = 'flex';
    alignmentValidationBtn.classList.add('selected');
    contentValidationBtn.classList.remove('selected');
});
