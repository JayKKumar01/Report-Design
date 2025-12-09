// prodigy.js (minimal)
// Only wires the two Prodigy buttons (Source / Target) — no extras.

let isSourceSelected = true; // default

// Find buttons inside the prodigy action-mode-buttons area
const prodigyActionButtons = document.querySelectorAll('#prodigy-div .action-mode-buttons button');

if (prodigyActionButtons && prodigyActionButtons.length) {
    prodigyActionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // remove selected from all
            prodigyActionButtons.forEach(b => b.classList.remove('selected'));

            // mark clicked as selected
            btn.classList.add('selected');

            // update flag
            if (btn.id === 'prodigySourceBtn' || btn.textContent.trim().toLowerCase() === 'source') {
                isSourceSelected = true;
            } else {
                isSourceSelected = false;
            }
        });
    });
}
