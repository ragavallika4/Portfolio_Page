document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration Successful");
    window.location.href = "../html/login.html";
});