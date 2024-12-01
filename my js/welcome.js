var alldata = JSON.parse(localStorage.getItem('userData')) || [];
var loggedInEmail = localStorage.getItem('loggedInUserEmail');

var welcomeSelector = document.querySelector('#userNameWelcome');

if (loggedInEmail) {
    // Find the user in alldata
    // for(var i=0;i<=alldata.length;i++)
    var loggedInUser = alldata.find(user => user.username === loggedInEmail);

    if (loggedInUser) {
        
        
        welcomeSelector.innerHTML = ` ${loggedInUser.name}`;
    } else {
        console.log('User not found!');
    }
}