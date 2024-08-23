document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let errorMessages = "";
    
    // Validate Name
    let name = document.getElementById("name").value;
    if (name.length < 3) {
        errorMessages += "Name must be at least 3 characters long.<br>";
    }
    
    // Validate Email
    let email = document.getElementById("email").value;
    if (!email.includes("@")) {
        errorMessages += "Email must be a valid email address.<br>";
    }
    
    // Validate Password
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password.length < 6) {
        errorMessages += "Password must be at least 6 characters long.<br>";
    }
    if (password !== confirmPassword) {
        errorMessages += "Passwords do not match.<br>";
    }
    
    // Display error messages
    document.getElementById("errorMessages").innerHTML = errorMessages;
    
    // If no errors, submit the form
    if (!errorMessages) {
        this.submit();
    }
});
