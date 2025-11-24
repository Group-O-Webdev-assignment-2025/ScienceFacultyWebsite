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

// 3. Simple program details alert
function showProgramDetails(programName) {
    if (programName === 'Computer Science') {
        alert('Computer Science Program:\n\n• Duration: 3 Years\n• Learn programming, web development, and software engineering\n• Career opportunities: Software Developer, Web Developer, Systems Analyst');
    } else if (programName === 'Information Technology') {
        alert('Information Technology Program:\n\n• Duration: 3 Years\n• Learn networking, system administration, and IT support\n• Career opportunities: Network Administrator, IT Support Specialist, System Administrator');
    } else {
        alert('Program information for ' + programName);
    }
}


// simple-popup.js - Contact Button Popup Options

document.addEventListener('DOMContentLoaded', function() {
    setupContactButtons();
});

function setupContactButtons() {
    // Get all contact buttons
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get staff member info
            const staffCard = this.closest('.staff-card');
            const staffName = staffCard.querySelector('h3').textContent;
            const emailElement = staffCard.querySelector('.fa-envelope').parentNode;
            const staffEmail = emailElement.textContent.trim();
            
            // Show popup with 3 options
            showPopup(staffName, staffEmail);
        });
    });
}

function showPopup(staffName, staffEmail) {
    // Create popup background
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
    `;
    
    // Create popup content
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1001;
        text-align: center;
        min-width: 300px;
    `;
    
    popup.innerHTML = `
        <h3 style="color: #1a237e; margin-bottom: 15px;">Contact ${staffName}</h3>
        <p style="margin-bottom: 20px; color: #666;">${staffEmail}</p>
        
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="sendEmail('${staffName}', '${staffEmail}')" 
                    style="padding: 12px; background: #00bcd4; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Send Email ✨
            </button>
            
            <button onclick="copyEmail('${staffEmail}', '${staffName}')" 
                    style="padding: 12px; background: #ff5252; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Copy Email 📋
            </button>
            
            <button onclick="closePopup()" 
                    style="padding: 10px; background: transparent; color: #666; border: 1px solid #ddd; border-radius: 5px; cursor: pointer;">
                Close
            </button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
    // Close when clicking overlay
    overlay.addEventListener('click', closePopup);
}





// Function to close popup
function closePopup() {
    const overlay = document.querySelector('div[style*="background: rgba(0, 0, 0, 0.5)"]');
    const popup = document.querySelector('div[style*="min-width: 300px"]');
    
    if (overlay) overlay.remove();
    if (popup) popup.remove();
}