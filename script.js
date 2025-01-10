/* JavaScript to toggle the responsive navigation bar */
document.querySelector('.hamburger').addEventListener('click', () => {
    const navButtons = document.querySelector('.nav-buttons');
    navButtons.classList.toggle('show');
});
 

