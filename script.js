document.getElementById('submitWish').addEventListener('click', function() {
    const wishInput = document.getElementById('wishInput').value;
    if (wishInput.trim() !== "") {
      document.getElementById('wishText').textContent = wishInput;
      document.getElementById('wishDisplay').classList.remove('hidden');
    } else {
      alert("Please write a wish before submitting!");
    }
  });
  