const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginHeader = document.getElementById("login-header");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username.toLowerCase() === "potato" && password === "labneh123") {
        alert("You have successfully logged in.");
        window.location.replace("mainpage.html");
    } else {
        loginErrorMsg.style.opacity = 1;

    }
})

const regButton = document.getElementById("reg-form-submit");
const regForm = document.getElementById("registerForm");

regButton.addEventListener("click", (e) => {
    e.preventDefault();
    loginErrorMsg.style.opacity = 0;
    regForm.style.opacity =1;
    loginForm.remove();
    loginHeader.innerHTML = "Join our OnlyFriends Family Now!";  

})


const regButton2 = document.getElementById("reg2-form-submit");
const userInfo =document.getElementById("userData");

regButton2.addEventListener("click", (e) => {
             e.preventDefault();

             const name = document.getElementById('fullName-field').value;
               // document.write("value is "+ name);


             window.location.replace("mainpage.html");

  
                })


