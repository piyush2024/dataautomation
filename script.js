document.getElementById('confirmBtn').addEventListener('click', function() {
    const selectedOption = document.getElementById('dropdown').value;
  
    // If an option is selected, redirect to color.html with query parameters
    if (selectedOption) {
      window.location.href = `color.html?showPopup=true`;
    } else {
      alert('Please select an option before confirming.');
    }
  });
  