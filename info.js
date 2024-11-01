// Optional: Add interactivity to the heart
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const backButton = document.getElementById('backButton');

    heart.addEventListener('click', () => {
        // Toggle heart color between red and pink on click
        heart.style.backgroundColor = heart.style.backgroundColor === 'red' ? 'pink' : 'red';
    });

    backButton.addEventListener('click', () => {
        // Redirect to the home page (update with the correct URL)
        window.location.href = 'end.html'; // Adjust this if needed
    });
});
