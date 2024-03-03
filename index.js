
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission
    
    // Generate a random ticket number
    var ticketNumber = Math.floor(Math.random() * 1000000);
    
    // Log the ticket number
    console.log("Ticket Number: " + ticketNumber);
}

// Function to handle option selection
function handleOptionSelection(event) {
    var selectedOption = event.currentTarget; // Get the clicked list item
    var selectedOptionText = selectedOption.dataset.option; // Get the text of the selected option
    var options = document.querySelectorAll('.option'); // Get all options
    
    // Loop through all options to remove the 'selected' class
    options.forEach(function(option) {
        option.classList.remove('selected');
    });
    
    // Add 'selected' class to the clicked option
    selectedOption.classList.add('selected');
}

// Add event listener to the form submission when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationform").addEventListener("submitbtn", handleFormSubmission);
    
    // Add event listener to each option
    var options = document.querySelectorAll('.option');
    options.forEach(function(option) {
        option.addEventListener('click', handleOptionSelection);
    });
});


