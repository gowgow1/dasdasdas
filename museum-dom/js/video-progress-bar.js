// Change progress bar indicator value
const progressLine = document.querySelector('.control-panel__indicator--progress');

progressLine.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #b3b3b3 ${value}%, #b3b3b3 100%)`;
})

// Change volume indicator value
const volumeLine = document.querySelector('.control-panel__indicator--volume');

volumeLine.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #b3b3b3 ${value}%, #b3b3b3 100%)`;
})