let email = document.getElementById("email");
let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let toast = document.getElementById("toast");
let emailval = document.getElementById("emailval")
let passval = document.getElementById("passval")
function validate()
{
    if(email.value.length < 3)
    {
        emailval.innerHTML = "MIN 3 Character Required";
    }
    if(pass.value.length < 3)
    {
        passval.innerHTML = "MIN 3 Character Required";
    }
    if (email.value == "training@jalaacademy.com" && pass.value == "jobprogram") 
    {
        toast.classList.add("active-success");
        toast.innerHTML = "LOGIN SUCCESSFULL";
        return true;
    }
    else 
    {
        toast.classList.add("active-failed");
        toast.innerHTML = "LOGIN FAILED";
        return false;
    }
}