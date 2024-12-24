// Function to hide the navbar on mobile devices
function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  
  if (window.innerWidth <= 768) { // Check if the window width is 768px or smaller (mobile view)
      navbar.style.display = 'none'; // Hide navbar on mobile
  } else {
      navbar.style.display = 'flex'; // Show navbar for larger screens
  }
}

// Event listener to check window resize
window.addEventListener('resize', toggleNavbar);

// Call the function initially to set the navbar state on page load
toggleNavbar();
