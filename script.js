// This is for the mobile menu button
var menuButton = document.querySelector('.hamburger');
var menu = document.querySelector('.nav-menu');
var menuItems = document.querySelectorAll('.nav-link');

// When the menu button is clicked
if (menuButton) {
  menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('active');
    menu.classList.toggle('active');
  });
}

// When a menu item is clicked
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    menuButton.classList.remove('active');
    menu.classList.remove('active');
  });
}


// Close popup when clicking outside
window.addEventListener('click', function(event) {
  var modal = document.getElementById('imageModal');
  if (event.target === modal) {
    closeModal();
  }
});


// This is for footer year
document.addEventListener('DOMContentLoaded', function() {
  var yearElement = document.getElementById('currentYear');
  if (yearElement) {
    var currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
});