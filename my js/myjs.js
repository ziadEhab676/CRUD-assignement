// var loggingInReq = new XMLHttpRequest();

// loggingIn.open("get","")
// loggingIn.send();


// var signUpReq = new XMLHttpRequest();

// signUpReq.open("post","")            //aked hnb3tlo hagat fl body
// signUpReq.send();
// var replacor = document.querySelector('.bg-dark.text-white.d-flex.align-items-center.justify-content-center.vh-100');
var alldata = JSON.parse(localStorage.getItem('userData')) || [];
// hna select ashan a3rf a5od  al input value
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var nameInput = document.querySelector('#name');



var logoutBtn = document.querySelector('#logout-btn');
var signupBtn = document.querySelector('#signup-btn');
var loginBtn = document.querySelector('#login-btn');



var signupLink = document.querySelector('#sign-up-link');
var loginLink = document.querySelector('#sign-in-link');


//hy5rg 3l html bta3 al login 3ady
// logoutBtn.addEventListener('click',function(){
// replacor.innerHTML=`      <div class="bg-dark text-white d-flex align-items-center justify-content-center vh-100">
//             <div class="container-sm p-4 bg-secondary rounded shadow-lg">
//                 <h1 class="text-center mb-4">Smart Login System</h1>
//                 <form>
//                     <div class="mb-3">
//                         <label for="email" class="form-label">Email</label>
//                         <input type="email" class="form-control" id="email" placeholder="Enter your email">
//                     </div>
//                     <div class="mb-3">
//                         <label for="password" class="form-label">Password</label>
//                         <input type="password" class="form-control" id="password" placeholder="Enter your password">
//                     </div>
//                     <button type="button" id="login-btn" class="btn btn-outline-info w-100">Login</button>
//                 </form>
//                 <div class="text-center mt-3">
//                     <p class="mb-0">Don't have an account? <a href="./signup.html" id="sign-up-link" class="text-warning">Sign
//                             Up</a></p>
//                 </div>
//             </div>
//         </div>`;
// });

//hya5od al data y5znha fl local storage w haywadyh 3la saf7t al login ashan y login  bs lw e5tar exsiting email msh hyrdo w hy2olo exsiting email
function loginUser() {
  

  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();

  // at2kd eno ktb al etnen
  if (email === "" || password === "") {
    alert("Please enter both email and password.");
    return;
  }


  var isUserFound = false;
  for (var i = 0; i < alldata.length; i++) {
    if (alldata[i].username === email && alldata[i].password === password) {
      isUserFound = true;
      break; 
    }
  }

  if (isUserFound) {
    localStorage.setItem('loggedInUserEmail', emailInput.value); 
    alert("Login successfully!");
    window.location.href = './logout.html';
  } else {
    alert("Invalid email or password. Please sign up if you don't have an account.");
  }
}






//hya5od al data y check enha  fl local storage lw ah => hyn2lo 3l HOME page     lw la => hytl3lo eh al 8lt aw
loginBtn.addEventListener('click',function(){
  loginUser();
});


//////////////////////////////////////////////////////////////////////////////////



