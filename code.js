






const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginHeader = document.getElementById("login-header");

const regButton = document.getElementById("reg-form-submit");
const regForm = document.getElementById("registerForm");


const regButton = document.getElementById("reg2-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username.toLowerCase() === "potato" && password === "labneh123") {
        alert("You have successfully logged in.");
        window.location.replace("mainpage.html");
    } else {a
        loginErrorMsg.style.opacity = 1;

    }
})


//REGISTER BUTTON

regButton.addEventListener("click", (e) => {
    e.preventDefault();

    regForm.style.opacity =1;
    loginForm.remove();
    loginHeader.innerHTML = "Join our OnlyFriends Family Now!";  

})



/*
            document.getElementById("reg2-form-submit").addEventListener("click", (e) => {
             e.preventDefault();
             const signup = document.getElementById("registerForm");
             

             fullName = signup.fullName.value;

             email= signup.email.value;
             document.getElementById("userData").innerHTML(fullName + "\n" + email);




             window.location.replace("mainpage.html");

  
                })


//SIGN-UP SECTION













/*

document.getElementById("reg2-form-submit").addEventListener("click", (e) => {
  e.preventDefault();

  const link = document.createElement("a");
  link.download = 'test.txt';
  link.href = window.URL.createObjectURL(
    new Blob([ [
      document.getElementById("fullName-field").value,
      document.getElementById("newPass-field").value
    ].join('\n') ],
    { type: 'text/plain' })
  );
  link.style.display = "none";
  document.body.appendChild(link);

  link.click();
  link.remove();
});

// DOWNLOAD TXT doc

*/