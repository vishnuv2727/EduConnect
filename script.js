function openRegister() {
    document.getElementById("register-modal").style.display = "block";
}

function closeRegister() {
    document.getElementById("register-modal").style.display = "none";
}

function openLogin() {
    document.getElementById("login-modal").style.display = "block";
}

function closeLogin() {
    document.getElementById("login-modal").style.display = "none";
}

function register() {
    const name = document.getElementById("name").value;
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value;
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    if (name && branch && semester && year && email && userId && password) {
        const userData = { name, userId, password }; // Store full name
        localStorage.setItem(userId, JSON.stringify(userData)); // Save user data
        alert("Registration Successful! Please log in.");
        closeRegister();
    } else {
        alert("Please fill in all fields.");
    }
}


function login() {
    const loginUserId = document.getElementById("loginUserId").value;
    const loginPassword = document.getElementById("loginPassword").value;
    
    const storedUser = localStorage.getItem(loginUserId);
    
    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === loginPassword) {
            localStorage.setItem("loggedInUser", JSON.stringify(userData)); // Store logged-in user data
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Incorrect password. Try again.");
        }
    } else {
        alert("User not found. Please register.");
    }
}

