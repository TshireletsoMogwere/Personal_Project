document.addEventListener("DOMContentLoaded", function() {
    // Function to handle option selection and generate ticket number
    function handleOptionSelection(event) {
        event.preventDefault(); // Prevent default link behavior
        
        var selectedOption = event.currentTarget; // Get the clicked list item
        var selectedOptionText = selectedOption.dataset.option; // Get the text of the selected option
        
        // Generate a random ticket number
        var ticketNumber = Math.floor(Math.random() * 500);
        
        // Create a ticket element
        var ticket = document.createElement('div');
        ticket.classList.add('ticket');
        ticket.innerHTML = '<p>Ticket Number for ' + selectedOptionText + ': ' + ticketNumber + '</p>';
        
        // Append the ticket to the DOM
        document.querySelector('.Fill-in-form').appendChild(ticket);
        
        // Toggle 'selected' class to highlight the selected option
        var options = document.querySelectorAll('.option');
        options.forEach(function(option) {
            option.classList.remove('selected'); // Remove 'selected' class from all options
        });
        selectedOption.classList.add('selected'); // Add 'selected' class to the clicked option
    }

    // Add event listener to each option
    var options = document.querySelectorAll('.option');
    options.forEach(function(option) {
        option.addEventListener('click', handleOptionSelection);
    });

    // Get the submit button
    const submitButton = document.getElementById("submit-btn");

    // Add click event listener to the submit button
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Perform any actions you want before redirecting, such as generating ticket number
        
        // Redirect to another page (Page 2)
        window.location.href = "page2.html";
    });
});


function goToPage2() {
    window.location.href = "page2.html";
}