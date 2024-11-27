let wishCount = 0;

// Get the button and the counter text element
const wishButton = document.getElementById('wishButton');
const wishCountDisplay = document.getElementById('wishCount');

// Event listener for the button
wishButton.addEventListener('click', () => {
  wishCount++;
  wishCountDisplay.textContent = wishCount;
});
