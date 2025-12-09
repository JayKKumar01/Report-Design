// Buttons
const contentValidationBtn = document.getElementById('content-validation-btn');
const alignmentValidationBtn = document.getElementById('alignment-validation-btn');
const prodigyValidationBtn = document.getElementById('prodigy-validation-btn');

// Sections
const contentDiv = document.getElementById('content-div');
const alignmentDiv = document.getElementById('alignment-div');
const prodigyDiv = document.getElementById('prodigy-div');

// Helper to switch tabs
function activateTab(activeBtn, ...inactiveBtns) {
    activeBtn.classList.add('selected');
    inactiveBtns.forEach(btn => btn.classList.remove('selected'));
}

// Show Content Validation
contentValidationBtn.addEventListener('click', () => {
    contentDiv.style.display = 'flex';
    alignmentDiv.style.display = 'none';
    prodigyDiv.style.display = 'none';

    activateTab(contentValidationBtn, alignmentValidationBtn, prodigyValidationBtn);

    updateImageProperties(); // existing function
});

// Show Alignment Validation
alignmentValidationBtn.addEventListener('click', () => {
    alignmentDiv.style.display = 'flex';
    contentDiv.style.display = 'none';
    prodigyDiv.style.display = 'none';

    activateTab(alignmentValidationBtn, contentValidationBtn, prodigyValidationBtn);
});

// Show Prodigy Validation
prodigyValidationBtn.addEventListener('click', () => {
    prodigyDiv.style.display = 'flex';
    contentDiv.style.display = 'none';
    alignmentDiv.style.display = 'none';

    activateTab(prodigyValidationBtn, contentValidationBtn, alignmentValidationBtn);

    // TODO: update prodigy image if needed
});
