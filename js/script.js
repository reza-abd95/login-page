function checkUserName(){
    let username = document.getElementById("username").value;
    let errorUserName = document.getElementById("user_error");
    let userRegex = /^[A-Za-z]{1,15}$/g ;

    if (userRegex.test(username)) {
        errorUserName.style.visibility = "hidden";
      } else {
        errorUserName.style.visibility = "visible";
    }
}

function checkEmail(){
    let email = document.getElementById("email").value;
    let errorEmail = document.getElementById("email_error");
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ;

    if (emailRegex.test(email)) {
        errorEmail.style.visibility = "hidden";
      } else {
        errorEmail.style.visibility = "visible";
    }
}

function checkPassword(){
    let password = document.getElementById("password").value;
    let errorPassword = document.getElementById("pass_error");
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g ;

    if (passwordRegex.test(password)) {
        errorPassword.style.visibility = "hidden";
      } else {
        errorPassword.style.visibility = "visible";
    }
}