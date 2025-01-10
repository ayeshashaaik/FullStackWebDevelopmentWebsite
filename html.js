 // Show popup on page load
 window.onload = function () {
    const popup = document.getElementById('imagePopup');
    const closeBtn = document.getElementById('closePopup');

    // Show the popup when the page loads
    popup.style.display = 'block';

    // Close the popup when clicking the close button
    closeBtn.onclick = function () {
        popup.style.display = 'none';
    };

    // Close the popup when clicking outside the image
    window.onclick = function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };
};