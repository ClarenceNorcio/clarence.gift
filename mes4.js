const envelope = document.getElementById('envelope');
const openButton = document.getElementById('open-button');
const closeButton = document.getElementById('close-button');
const backButton = document.getElementById('back-button');

openButton.addEventListener('click', () => {
    envelope.querySelector('.envelope-inner').style.transform = 'rotateY(180deg)';
});

closeButton.addEventListener('click', () => {
    envelope.querySelector('.envelope-inner').style.transform = 'rotateY(0deg)';
});

// Add functionality for the back button
backButton.addEventListener('click', () => {
    window.location.href = 'slider.html'; // Redirect to slider.html
});
