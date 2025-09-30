document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let isValid = true;


  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");


  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  // Success message
  /*if (isValid) {
    successMsg.textContent = "Form submitted successfully!";
  }*/

    if (isValid) {
  // Redirect to success page
  window.location.href = "success.html";
}
});

