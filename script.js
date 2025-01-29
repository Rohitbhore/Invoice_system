
const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => {
  home.classList.remove("show");
  clearLoginForm(); // Clear the form when closing
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Replace the following condition with your actual validation logic
  if (validateCredentials(username, password)) {
    function validateCredentials(username, password) {
      // Replace this with your actual validation logic
      return username === "Aditya" && password === "12345";
    }
    
    // Function to clear the login form
    function clearLoginForm() {
      usernameInput.value = "";
      passwordInput.value = "";
    }
    // Credentials are correct, navigate to the invoice page
    window.location.href = "invoice.html";
  } else {
    // Display an error message (you can customize this)
    alert("Login failed. Please check your credentials.");
    clearLoginForm(); // Clear the form
  }
});





