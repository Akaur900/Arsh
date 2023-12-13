// home.js
document.addEventListener('DOMContentLoaded', function() {
    const highlightsSection = document.querySelector('.highlights');
    const interestsSection = document.querySelector('.interests');
    const highlightsButton = document.getElementById('highlightsButton');
    const interestsButton = document.getElementById('interestsButton');

    highlightsButton.addEventListener('click', function() {
        if (highlightsSection.style.display !== 'block') {
            highlightsSection.style.display = 'block';
            interestsSection.style.display = 'none';
        } else {
            highlightsSection.style.display = 'none';
        }
    });

    interestsButton.addEventListener('click', function() {
        if (interestsSection.style.display !== 'block') {
            interestsSection.style.display = 'block';
            highlightsSection.style.display = 'none';
        } else {
            interestsSection.style.display = 'none';
        }
    });
});
