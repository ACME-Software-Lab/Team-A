// Select the close button
const closeButton = document.querySelector('.fa-times');

// Add click event listener
closeButton.addEventListener('click', function() {
  // Hide the banner
  document.querySelector('.banner').style.display = 'none';
});
