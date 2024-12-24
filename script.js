function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  
  if (window.innerWidth <= 768) {
      navbar.style.display = 'none';
  } else {
      navbar.style.display = 'flex';
  }
}
window.addEventListener('resize', toggleNavbar);
toggleNavbar();
