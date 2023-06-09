
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Update submit button text
    document.getElementById("submitButton").textContent = "Submitted";

    // Submit the form using AJAX or any other method if needed
    // You can use fetch() or jQuery.ajax() to send the form data asynchronously

    // Optionally, display a success message to the user
    alert("Form submitted successfully!");
  });

