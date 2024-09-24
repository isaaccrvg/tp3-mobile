document.getElementById('menuToggle').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
