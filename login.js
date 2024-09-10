document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();   
    var username = document.getElementById("un").value;
    var password = document.getElementById("pwd").value;

    if (username === "Ragavallika" && password === "Raga@123$" || username === "Raji" && password === "Raji@123") {
        alert(`Login Successful. Welcome ${username}!`);
        window.location.href = "WebProfile.html";
    } else if (username === "" && password === "") {
        alert("Enter Username and password to login");
    } else {
        alert("Invalid username or password");
    }
});

document.getElementById("registerButton").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "Register.html";
});


// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var username = document.getElementById("un").value;
//     var password = document.getElementById("pwd").value;

//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         if (data.success) {
//             alert(data.message);
//             window.location.href = "WebProfile.html";
//         } else {
//             alert(data.message);
//         }
//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//         alert('An error occurred. Please try again.');
//     });
// });

// document.getElementById("registerButton").addEventListener("click", function(event) {
//     event.preventDefault();
//     window.location.href = "Register.html";
// });
