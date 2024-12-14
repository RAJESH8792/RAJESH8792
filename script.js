document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the popup
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', function() {
    // Hide the popup
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');

    // Optionally clear the form
    document.getElementById('registrationForm').reset();
});
