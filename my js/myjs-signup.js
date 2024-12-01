var alldata = [];
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var nameInput = document.querySelector('#name');

var signupBtn = document.querySelector('#signup-btn');

// Regular expressions for validation
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // valid email ending {{{{   .com   }}}} 
var passwordRegex = /^[A-Za-z0-9]{8,}$/; // at least 8 alphanumeric characters
var nameRegex = /^[A-Za-z\s]+$/; // only alphabetic characters and spaces

// Function to check en al email msh most5dm abl kda
function isEmailAlreadyExists(email) {
    return alldata.some(user => user.username === email);
}

// Function al signup ll user a gded
function addingNewUser() {
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    var name = nameInput.value.trim();

    // Validation
    if (!emailRegex.test(email)) {
        alert("Invalid email: it must contain '@' and end with '.com'.");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Invalid password: it must be at least 8 characters long and contain only letters and numbers.");
        return;
    }
    if (!nameRegex.test(name)) {
        alert("Invalid name: it must contain only letters and spaces.");
        return;
    }
    if (isEmailAlreadyExists(email)) {
        alert("This email is already registered.");
        return;
    }

    // Add new user  ll json bta3y
    var account = {
        username: email,
        password: password,
        name: name
    };
    alldata.push(account);

    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(alldata));

    // Success message
    alert("User successfully registered! please head to sign in page");

    // Clear input  bdl ma 23mlha function
    emailInput.value = "";
    passwordInput.value = "";
    nameInput.value = "";
}

// bgyb al data ml local storage
window.onload = function () {
    var storedData = localStorage.getItem('userData');
    if (storedData) {
        alldata = JSON.parse(storedData);
    }
};


signupBtn.addEventListener('click',function(){
    var email = emailInput.value.trim();
    isEmailAlreadyExists(email);
    addingNewUser();
    
});


