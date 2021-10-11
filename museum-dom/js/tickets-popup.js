// Get the modal
const modal = document.getElementById("booking-popup");
// Get the button that opens the modal
const btn = document.getElementById("booking-open");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close-button")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "none";
  // modal.style.left = "3000";
  // modal.style.animation = "closePopup 0.8s ease forwards";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // modal.style.left = "3000";
    // modal.style.animation = "closePopup 0.8s ease forwards";
  }
}