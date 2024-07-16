// Your code here
// index.js
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left.replace('px', '');
    left = parseInt(left, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left.replace('px', '');
    left = parseInt(left, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  