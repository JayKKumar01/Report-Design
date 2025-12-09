// prodigy.js
// Renders the prodigy image for the current page and wires Source/Target buttons.

// Flag for Source vs Target selection
let isSourceSelected = true; // default

// Buttons inside the prodigy action-mode-buttons area
const prodigyActionButtons = document.querySelectorAll('#prodigy-div .action-mode-buttons button');

// The prodigy image element in the DOM
const prodigyImageEl = document.getElementById('prodigyImage');

// The pairs list container (right panel)
const pairsListEl = document.getElementById('pairsList');

/**
 * Utility: get the page entry object for currentSet/currentPage
 * Expected shape per page:
 * {
 *   source: { image: "...", pairs: [ [src, tgt], ... ] },
 *   target: { image: "...", pairs: [ [src, tgt], ... ] }
 * }
 */
function getProdigyPageEntry(currentSet, currentPage) {
    if (!currentSet || !Array.isArray(currentSet.prodigyValidation)) return null;
    const pageIndex = (typeof currentPage === 'number' && currentPage > 0) ? currentPage - 1 : 0;
    if (pageIndex < 0 || pageIndex >= currentSet.prodigyValidation.length) return null;
    return currentSet.prodigyValidation[pageIndex] || null;
}

/**
 * Get the prodigy image path for the current set & page.
 * Returns the source.image if isSourceSelected === true, otherwise target.image.
 *
 * @param {Object} currentSet
 * @param {number} currentPage
 * @returns {string|null}
 */
function getProdigyImagePath(currentSet, currentPage) {
    const pageEntry = getProdigyPageEntry(currentSet, currentPage);
    if (!pageEntry) {
        console.warn('getProdigyImagePath: pageEntry not found');
        return null;
    }

    // Expect pageEntry.source and pageEntry.target to exist
    if (isSourceSelected) {
        return (pageEntry.source && pageEntry.source.image) ? pageEntry.source.image : null;
    } else {
        return (pageEntry.target && pageEntry.target.image) ? pageEntry.target.image : null;
    }
}

/**
 * Returns the currently selected side's pairs for the current page:
 * e.g. [ [srcSentence, tgtSentence], ... ]
 * If not found, returns an empty array.
 *
 * @param {Object} currentSet
 * @param {number} currentPage
 * @returns {Array}
 */
function getCurrentProdigyPairs(currentSet, currentPage) {
    const pageEntry = getProdigyPageEntry(currentSet, currentPage);
    if (!pageEntry) return [];
    const side = isSourceSelected ? pageEntry.source : pageEntry.target;
    if (!side || !Array.isArray(side.pairs)) return [];
    return side.pairs;
}

/**
 * Dispatch a custom event 'prodigyPairsChanged' with detail { pairs, side } so UI can update.
 *
 * @param {Array} pairs
 */
function dispatchProdigyPairsChanged(pairs) {
    const ev = new CustomEvent('prodigyPairsChanged', {
        detail: {
            pairs,
            side: isSourceSelected ? 'source' : 'target'
        }
    });
    document.dispatchEvent(ev);
}

/**
 * Render the pairs into the #pairsList container.
 * Each row: .pair-row -> two .col elements (.wrong and .suggested)
 *
 * Uses textContent to avoid HTML injection.
 *
 * @param {Array} pairs
 */
function renderProdigyPairs(pairs) {
    if (!pairsListEl) return;

    // Clear existing
    pairsListEl.innerHTML = '';

    if (!Array.isArray(pairs) || pairs.length === 0) {
        // Optionally show an empty state
        const empty = document.createElement('div');
        empty.className = 'pair-row';
        const left = document.createElement('div');
        left.className = 'col wrong';
        left.textContent = 'No sentences';
        const right = document.createElement('div');
        right.className = 'col suggested';
        right.textContent = '';
        empty.appendChild(left);
        empty.appendChild(right);
        pairsListEl.appendChild(empty);
        return;
    }

    // Append rows
    pairs.forEach(pair => {
        // pair may be [wrong, suggested] — be defensive
        const wrongText = (Array.isArray(pair) && pair.length > 0 && typeof pair[0] === 'string') ? pair[0] : '';
        const suggestedText = (Array.isArray(pair) && pair.length > 1 && typeof pair[1] === 'string') ? pair[1] : '';

        const row = document.createElement('div');
        row.className = 'pair-row';

        const left = document.createElement('div');
        left.className = 'col wrong';
        left.textContent = wrongText;

        const right = document.createElement('div');
        right.className = 'col suggested';
        right.textContent = suggestedText;

        row.appendChild(left);
        row.appendChild(right);
        pairsListEl.appendChild(row);
    });
}

/**
 * Update the prodigy image element's src based on currentSet & currentPage.
 * Also dispatches prodigyPairsChanged so any consumer can re-render the list.
 *
 * @param {Object} currentSet
 * @param {number} currentPage
 */
function updateProdigyImage(currentSet, currentPage) {
    if (!prodigyImageEl) return;

    if (!currentSet) {
        prodigyImageEl.src = '';
        const empty = [];
        dispatchProdigyPairsChanged(empty);
        renderProdigyPairs(empty);
        console.info('updateProdigyImage: no currentSet provided — cleared image and pairs');
        return;
    }

    const imagePath = getProdigyImagePath(currentSet, currentPage);
    if (imagePath) {
        prodigyImageEl.src = imagePath;
    } else {
        prodigyImageEl.src = '';
        console.warn(`updateProdigyImage: could not find prodigy image for page ${currentPage}`);
    }

    // Notify any UI that the pairs changed (or may be same but consumer can re-render)
    const pairs = getCurrentProdigyPairs(currentSet, currentPage);
    dispatchProdigyPairsChanged(pairs);

    // Also render directly into the pairs list
    renderProdigyPairs(pairs);
}

// Wire up the buttons to toggle selection and update the image
if (prodigyActionButtons && prodigyActionButtons.length) {
    prodigyActionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // remove 'selected' from all
            prodigyActionButtons.forEach(b => b.classList.remove('selected'));

            // mark clicked as selected
            btn.classList.add('selected');

            // update flag based on id or text (robust)
            if (btn.id === 'prodigySourceBtn' || btn.textContent.trim().toLowerCase() === 'source') {
                isSourceSelected = true;
            } else {
                isSourceSelected = false;
            }

            // Update the prodigy image and notify pairs changed when mode changes
            updateProdigyImage(currentSet, currentPage);
        });
    });
}

// Expose the update function and helper so other scripts (sidebar/navigation) can call them
window.updateProdigyImage = updateProdigyImage;
window.getCurrentProdigyPairs = getCurrentProdigyPairs;
window.isProdigySourceSelected = () => isSourceSelected;

// Initial update on DOMContentLoaded (in case currentSet/currentPage are already set)
document.addEventListener('DOMContentLoaded', () => {
    updateProdigyImage(currentSet, currentPage);
});
